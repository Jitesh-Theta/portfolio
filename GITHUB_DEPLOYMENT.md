# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages:

## Step 1: Initialize Git Repository (if not already done)

```bash
cd "c:\Users\jitesh.tambakhe.THETA\Downloads\jitesh-tambakhe---portfolio(1)"
git init
git add .
git commit -m "Initial commit: Portfolio with elegant dark theme"
```

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `jitesh-tambakhe-portfolio` (or your preferred name)
3. Do NOT initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

## Step 3: Add Remote and Push Code

Replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 4: Update Vite Configuration

Update your `vite.config.ts` to include the base path:

```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/REPO_NAME/',  // Replace REPO_NAME with your repository name
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
```

## Step 5: Build the Project

```bash
npm install
npm run build
```

This creates a `dist` folder with your optimized portfolio.

## Step 6: Deploy Using GitHub Actions (Automatic)

Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          force_clean: true
```

## Step 7: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select `gh-pages` and `/root` folder
4. Save

## Step 8: Push Changes

```bash
git add .
git commit -m "Add GitHub Pages deployment config"
git push origin main
```

GitHub Actions will automatically:
- Build your portfolio
- Deploy to the `gh-pages` branch
- Make it available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Step 9: View Your Portfolio

After a few minutes (GitHub Actions need to complete), visit:
```
https://YOUR_USERNAME.github.io/jitesh-tambakhe-portfolio/
```

## Troubleshooting

- **Images not loading**: Update image paths in components to use relative paths
- **Styles not applying**: Make sure `base` is correctly set in `vite.config.ts`
- **GitHub Actions failing**: Check the Actions tab in your repository for error logs
- **Still not working**: Enable GitHub Pages in repository settings under "Actions" permissions

## Notes

- Your portfolio is now live! Share the link with anyone
- Updates will be automatic - just push to `main` branch
- GitHub Pages caches content, so changes may take 1-2 minutes to appear
