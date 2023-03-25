# Blog-Server Deployment Guide
The deployments (staging/production) are managed by Github Actions - However if you want to deploy manually you can follow the steps below.

## Software Requirements
2. [Google Cloud (gcloud) CLI](https://cloud.google.com/sdk/docs/install)
3. [Terraform CLI](https://www.terraform.io/downloads)
4. [Docker CLI](https://docs.docker.com/get-docker/)

## Environment Requirements
```sh
# Reference for creating and downloading Google Service accounts can be found here...
# https://cloud.google.com/iam/docs/service-accounts

# Used for gcloud and terraform API access
export GOOGLE_CREDENTIALS=<path/to/service_account/key.json>
```

## Build Image

```sh
# Authenticate with Google Container Registry
gcloud auth configure-docker

# Root Dir
docker build -t gcr.io/amplication/blog-server:v1.0.0-example .

# Push Image to Google Container Registry
docker push gcr.io/amplication/blog-server:v1.0.0-example
```

## Terraform
### Staging

```sh
export TF_VAR_db_password=ChangeMe! # (Real Password found in LastPass)
export TF_VAR_image=gcr.io/amplication/blog-server:v1.0.0-example
terraform init -backend-config="prefix=amplication-blog-server/staging"
terraform apply --var-file=environments/staging.tfvars
```

### Production

```sh
export TF_VAR_db_password=ChangeMe! # (Real Password found in LastPass)
export TF_VAR_image=gcr.io/amplication/blog-server:v1.0.0-example
terraform init -backend-config="prefix=amplication-blog-server/production"
terraform apply --var-file=environments/production.tfvars
```

### Terraform Import
The DNS Mappings for the Cloud Run service for both `staging` and `production` need to be imported. If changes are required for Cloud Run DNS you'll need to re-import. Follow below steps...

Domain Mapping can be imported using this accepted format:

```
$ terraform import google_cloud_run_domain_mapping.default locations/{{location}}/namespaces/{{project}}/domainmappings/{{name}}
```

The current Terraform state is imported like so...
```sh
# Staging
terraform import --var-file=environments/staging.tfvars google_cloud_run_domain_mapping.mapping locations/us-east1/namespaces/amplication/domainmappings/staging-blog-api.amplication.com

# Production
terraform import --var-file=environments/production.tfvars google_cloud_run_domain_mapping.mapping locations/us-east1/namespaces/amplication/domainmappings/blog-api.amplication.com
