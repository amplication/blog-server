output "service_url" {
  value = google_cloud_run_service.service.status[0].url
}

output "cloud_sql_instance_connection_name" {
  value = google_sql_database_instance.instance.connection_name
}

output "cloud_sql_instance_user" {
  value = google_sql_user.user.name
}

output "cloud_sql_instance_database" {
  value = google_sql_database.database.name
}