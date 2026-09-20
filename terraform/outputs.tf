output "ecr_repository_url" {
  value       = aws_ecr_repository.app_ecr.repository_url
  description = "The URL of the created Amazon ECR repository"
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions_role.arn
  description = "ARN for GitHub Actions OIDC role to set in GitHub Secrets"
}