# 🦊 GitLab Pages Deployment Guide

## Quick Setup for Sabor Salvadoreño

### 1. Create GitLab Repository
1. Go to [GitLab.com](https://gitlab.com)
2. Click "New project" → "Create blank project"
3. Configure:
   - **Project name**: `sabor-salvadoreno`
   - **Description**: `Interactive Salvadoran cuisine platform`
   - **Visibility**: Public
4. Click "Create project"

### 2. Push Your Code
```bash
# Navigate to your project
cd c:\NTF\rojane

# Add GitLab remote
git remote add gitlab https://gitlab.com/yourusername/sabor-salvadoreno.git

# Push to GitLab
git push -u gitlab main
```

### 3. GitLab Pages Configuration
The `.gitlab-ci.yml` file is already created and will automatically:
- Deploy your site when you push to main branch
- Make it available at: `https://yourusername.gitlab.io/sabor-salvadoreno`

### 4. Deploy
```bash
# Add the CI file and push
git add .gitlab-ci.yml
git commit -m "Add GitLab Pages configuration"
git push gitlab main
```

## 🚀 Live Site
Your website will be live at:
`https://yourusername.gitlab.io/sabor-salvadoreno`

Deployment takes 2-3 minutes after each push.

## 📋 Features Enabled
- ✅ Automatic deployment on push
- ✅ HTTPS enabled by default
- ✅ Custom domain support (optional)
- ✅ Branch-based deployments