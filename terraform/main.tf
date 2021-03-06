
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