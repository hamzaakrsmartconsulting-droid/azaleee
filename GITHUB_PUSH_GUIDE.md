# 🚀 Push to New GitHub Repository

This guide will help you push your project to a new GitHub repository.

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `azalee-demo` (or your preferred name)
   - **Description**: "Azalee Patrimoine - Next.js application with Docker deployment"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Add and Commit Your Changes

Run these commands in your project directory:

```bash
# Add all new Docker files
git add Dockerfile docker-compose.yml .dockerignore deploy.sh
git add env.production.template
git add DEPLOY_EC2.md QUICK_START.md DOCKER_SETUP_SUMMARY.md
git add src/lib/mongodb.js
git add .gitignore next.config.mjs package.json

# Commit the changes
git commit -m "Add Docker configuration for EC2 deployment with 3 containers"
```

## Step 3: Add New Remote and Push

### Option A: Replace Existing Remote (Recommended for New Repo)

```bash
# Remove existing remote
git remote remove origin

# Add your new GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to new repository
git push -u origin main
```

### Option B: Add as New Remote (Keep Old One)

```bash
# Add new remote with a different name
git remote add github https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to new repository
git push -u github main
```

## Step 4: If You Get Authentication Errors

### Using HTTPS (Personal Access Token)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Use the token as password when pushing

### Using SSH (Recommended)

```bash
# Check if you have SSH key
ls -al ~/.ssh

# If not, generate one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Then use SSH URL:
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

## Quick Commands Summary

```bash
# Navigate to project
cd "c:\Users\Hamza\Downloads\azalee demo"

# Add all Docker-related files
git add Dockerfile docker-compose.yml .dockerignore deploy.sh env.production.template
git add DEPLOY_EC2.md QUICK_START.md DOCKER_SETUP_SUMMARY.md
git add src/lib/mongodb.js .gitignore next.config.mjs package.json

# Commit
git commit -m "Add Docker deployment configuration for EC2"

# Add new remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git push -u origin main
```

## Troubleshooting

### "Repository not found"
- Check that the repository name is correct
- Verify you have access to the repository
- Make sure you're authenticated

### "Permission denied"
- Use Personal Access Token instead of password
- Or set up SSH keys

### "Branch name mismatch"
```bash
# If your branch is called something else (like 'prod')
git branch -M main
git push -u origin main
```

## What Gets Pushed

✅ **Included:**
- All source code
- Docker configuration files
- Documentation
- Package files

❌ **Excluded (via .gitignore):**
- `node_modules/`
- `.env` files
- `.next/` build folder
- Docker volumes
- Log files

## Next Steps After Pushing

1. Update README.md with deployment instructions
2. Add repository description on GitHub
3. Consider adding GitHub Actions for CI/CD
4. Set up branch protection rules for production

