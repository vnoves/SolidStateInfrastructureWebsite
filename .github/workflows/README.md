# GitHub Actions Deployment

This workflow automatically deploys the Next.js website to AWS S3 when code is pushed to the main/master branch.

## Setup Instructions

### 1. Create S3 Bucket

1. Go to AWS S3 Console
2. Create a new bucket (e.g., `solid-state-infrastructure-website`)
3. Enable static website hosting:
   - Go to Properties → Static website hosting
   - Enable it
   - Set index document: `index.html`
   - Set error document: `404.html` (or `index.html`)

### 2. Configure S3 Bucket Policy

Add a bucket policy to allow public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### 3. Block Public Access Settings

In S3 bucket → Permissions → Block public access:
- Uncheck "Block all public access" (or configure as needed for your use case)

### 4. Create IAM User for GitHub Actions

1. Go to AWS IAM Console
2. Create a new user (e.g., `github-actions-deploy`)
3. Attach the following policy (replace `your-bucket-name`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket",
        "s3:PutBucketWebsite"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

4. Create access keys for this user

### 5. Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add the following secrets:

- `AWS_ACCESS_KEY_ID`: Your IAM user access key ID
- `AWS_SECRET_ACCESS_KEY`: Your IAM user secret access key

### 6. Update Workflow File

Edit `.github/workflows/deploy-s3.yml` and update:

- `S3_BUCKET`: Your S3 bucket name
- `AWS_REGION`: Your AWS region (default: `us-east-1`)
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID (optional, leave empty if not using CloudFront)

### 7. Optional: CloudFront Setup

For better performance and HTTPS:

1. Create a CloudFront distribution
2. Set origin to your S3 bucket website endpoint
3. Configure SSL certificate
4. Add the distribution ID to the workflow file

## How It Works

1. On push to main/master branch, the workflow:
   - Checks out the code
   - Installs dependencies
   - Builds the Next.js static site
   - Syncs files to S3
   - Invalidates CloudFront cache (if configured)

2. The website will be available at:
   - S3 website endpoint: `http://your-bucket-name.s3-website-region.amazonaws.com`
   - Or your CloudFront domain if configured

## Manual Deployment

You can also trigger the workflow manually:
- Go to Actions tab in GitHub
- Select "Deploy to AWS S3" workflow
- Click "Run workflow"

