variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Target AWS Region"
}

variable "github_org_repo" {
  type        = string
  default     = "your-username/github-actions-devops-project"
  description = "GitHub Organization/Repository name allowed to assume OIDC role"
}

variable "cluster_name" {
  type        = string
  default     = "devops-eks-cluster"
  description = "Name of the AWS EKS Cluster"
}