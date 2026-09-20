# End-to-End DevOps CI/CD Pipeline with GitHub Actions

Production-grade DevOps reference project establishing an automated continuous integration and deployment pipeline targeting AWS EKS using GitHub Actions, OIDC Authentication, Terraform, Docker, and Kubernetes.

## 🚀 Key Features

- **Zero Permanent AWS Credentials:** Authenticates with AWS using OpenID Connect (OIDC) short-lived tokens.
- **Shift-Left Security:** Automated dependency audits and container filesystem security scans using Trivy.
- **Infrastructure as Code (IaC):** Modular Terraform code establishing AWS ECR, EKS IAM OIDC roles, and network security.
- **High Availability K8s:** Zero-downtime rolling deployments, Kubernetes Horizontal Pod Autoscaler (HPA), and automated HTTP health test rollback logic.

## 📋 Repository Structure

```
├── .github/
│   └── workflows/
│       ├── ci.yml    # Lint, Test, Trivy Scan, ECR Build & Push
│       └── cd.yml    # Kubernetes Deployment to EKS & Health Rollback
├── app/
│   ├── src/index.js  # Node.js / Express API with health & metrics
│   ├── Dockerfile    # Secure Multi-stage Node.js Docker build
│   └── package.json
├── terraform/        # AWS Infrastructure as Code (ECR, OIDC, IAM)
├── k8s/              # Kubernetes Manifests (Deployment, Service, HPA)
└── README.md
```

## 🛠️ Quick Setup Instructions

1. **Configure Repository Secrets in GitHub:**
   - `AWS_ROLE_ARN`: The ARN of the IAM Role created via Terraform
   - `AWS_REGION`: e.g. `us-east-1`
   - `AWS_ACCOUNT_ID`: Your 12-digit AWS Account Number

2. **Provision AWS Infrastructure:**
   ```bash
   cd terraform
   terraform init
   terraform apply
   ```

3. **Deploy Application:**
   Push a commit or merge a PR into the `main` branch to trigger the automated CI/CD pipeline.