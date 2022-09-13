
provider "google" {
  project     = var.project_id
  region      = var.region
}

# Cloud SQL
resource "google_sql_database_instance" "instance" {
  name             = "amplication-blog-server-${var.environment}"
  database_version = "POSTGRES_12"
  deletion_protection = false
  settings {
    tier = var.database_tier

  }
}

resource "google_sql_database" "database" {
  name     = var.db_name
  instance = google_sql_database_instance.instance.name
}

resource "google_sql_user" "user" {
  name     = var.db_user
  instance = google_sql_database_instance.instance.name
  password = var.db_password
}

# Cloud Run
resource "random_password" "jwt_secret_key" {
  length           = 16
  special          = true
  override_special = "_%@"
}
## Cloud Run Server
resource "google_cloud_run_service" "service" {
  name = "amplication-blog-server-${var.environment}"
  location = var.region

  template {
    spec {
      container_concurrency  = var.container_concurrency
      containers {
        image = var.image
        env {
          name  = "POSTGRESQL_URL"
          value = "postgresql://${google_sql_user.user.name}:${google_sql_user.user.password}@127.0.0.1/${google_sql_database.database.name}?host=/cloudsql/${var.project_id}:${var.region}:${google_sql_database_instance.instance.name}"
        }
        env {
          name  = "BCRYPT_SALT"
          value = 10
        }
        env {
          name  = "JWT_SECRET_KEY"
          value = random_password.jwt_secret_key.result
        }
        env {
          name  = "JWT_EXPIRATION"
          value = "2d"
        }
        resources {
          limits   = {
            cpu    = var.cpu
            memory = var.memory
          }
          requests = {
            cpu    = var.cpu
            memory = var.memory
          }
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale"      = var.cloud_run_min_replica
        "autoscaling.knative.dev/maxScale"      = var.cloud_run_max_replica
        "run.googleapis.com/cloudsql-instances" = "${var.project_id}:${var.region}:${google_sql_database_instance.instance.name}"
        "run.googleapis.com/cpu-throttling" =  var.cpu_allocation == "request" ? "true" : "false"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_member" "run_all_users" {
  service  = google_cloud_run_service.service.name
  location = google_cloud_run_service.service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

## Cloud Run Client
resource "google_cloud_run_service" "client-service" {
  name = "amplication-blog-server-client-${var.environment}"
  location = var.region

  template {
    spec {
      container_concurrency  = var.container_concurrency
      containers {
        image = var.image_client
        env {
          name  = "REACT_APP_SERVER_URL"
          value = var.app_server_url
        }
        ports {
          name = "http1"
          container_port = 80
        }
        resources {
          limits   = {
            cpu    = var.cpu
            memory = var.memory
          }
          requests = {
            cpu    = var.cpu
            memory = var.memory
          }
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale"      = var.cloud_run_min_replica
        "autoscaling.knative.dev/maxScale"      = var.cloud_run_max_replica
        "run.googleapis.com/cpu-throttling" =  var.cpu_allocation == "request" ? "true" : "false"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_member" "run_all_client_users" {
  service  = google_cloud_run_service.client-service.name
  location = google_cloud_run_service.client-service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

resource "google_cloud_run_domain_mapping" "client_mapping" {
  location = var.region
  name     = var.blog_server_client_domain

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = google_cloud_run_service.client-service.name
  }
}
resource "google_cloud_run_domain_mapping" "server_mapping" {
  location = var.region
  name     = var.blog_server_domain

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = google_cloud_run_service.service.name
  }
}

## Create Load Balancer
resource "google_compute_region_network_endpoint_group" "cloudrun_neg" {
  name                  = var.neg_name
  network_endpoint_type = "SERVERLESS"
  region                = var.region
  cloud_run {
    service = google_cloud_run_service.client-service.name
  }
}

module "lb-http" {
  source  = "GoogleCloudPlatform/lb-http/google//modules/serverless_negs"
  version = "~> 6.2.0"

  project = var.project_id
  name    = var.lb_name

  ssl                             = true
  managed_ssl_certificate_domains = [var.blog_server_client_domain]
  http_forward                    = false
  create_url_map                  = false
  url_map                         = google_compute_url_map.urlmap.name
  backends = {
    default = {
      description = null
      groups = [
        {
          group = google_compute_region_network_endpoint_group.cloudrun_neg.id
        }
      ]
      enable_cdn              = false
      custom_request_headers  = null
      custom_response_headers = null
      security_policy         = null

      iap_config = {
        enable               = false
        oauth2_client_id     = ""
        oauth2_client_secret = ""
      }
      log_config = {
        enable      = false
        sample_rate = null
      }
    }
  }
}

resource "google_compute_url_map" "urlmap" {
  name            = var.lb_name
  default_service = module.lb-http.backend_services[keys(module.lb-http.backend_services)[0]].self_link
  
  host_rule {
    hosts        = ["*"]
    path_matcher = "allpaths"
  }

  path_matcher {
    name            = "allpaths"
    default_service = module.lb-http.backend_services[keys(module.lb-http.backend_services)[0]].self_link

    path_rule {
      paths = ["/graphql"]
      url_redirect {
        host_redirect          = "${var.blog_server_domain}"
        path_redirect          = "/graphql"
        https_redirect         = true
        redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
        strip_query            = true
      }
    }
    path_rule {
      paths = ["/api"]
      url_redirect {
        host_redirect          = "${var.blog_server_domain}"
        path_redirect          = "/api"
        https_redirect         = true
        redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
        strip_query            = true
      }
    }
  }    
}

resource "google_compute_global_forwarding_rule" "http-rule" {
  project    = var.project_id
  name       = var.lb_name
  target     = google_compute_target_http_proxy.http_target.self_link
  ip_address = module.lb-http.external_ip
  port_range = "80"
}

# HTTP proxy when http forwarding is true
resource "google_compute_target_http_proxy" "http_target" {
  project = var.project_id
  name    = "${var.lb_name}-http-proxy-target"
  url_map = google_compute_url_map.https_redirect-target.self_link
}

resource "google_compute_url_map" "https_redirect-target" {
  project = var.project_id
  name    = "${var.lb_name}-amplication-https-redirect"
  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}