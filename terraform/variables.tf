variable "environment" {
  type  = string
}

variable "project_id" {
  type  = string
}

variable "region" {
  type  = string
}

variable "image" {
  type  = string
}

variable "database_tier" {
  type  = string
}

variable "cloud_run_min_replica" {
  type  = number
}

variable "cloud_run_max_replica" {
  type  = number
}

variable "db_name" {
  type  = string
}

variable "db_user" {
  type  = string
}

variable "db_password" {
  type  = string
  sensitive = true
}

variable "container_concurrency" {
  type    = number
  default = 0
}

variable "cpu" {
  type  = string
  default = "1"
}

variable "memory" {
  type  = string
  default = "512Mi"
}