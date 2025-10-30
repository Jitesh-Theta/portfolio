# Quick GitHub Pages Deployment Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `jitesh-tambakhe-portfolio`
3. Click "Create repository"

### Step 3: Connect Your Local Project to GitHub
Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/jitesh-tambakhe-portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages (Automatic)
- GitHub Actions will automatically build and deploy your site when you push
- Check "Actions" tab in your repository to see the deployment progress

### Step 5: Access Your Portfolio
After ~2-3 minutes, visit:
```
https://YOUR_USERNAME.github.io/jitesh-tambakhe-portfolio/
```

---

## 📋 What's Been Configured

✅ **Vite Config**: Base path set for GitHub Pages  
✅ **GitHub Actions**: Automated build and deployment  
✅ **Build Optimized**: Production build created and deployed  

---

## 🔄 Making Updates

After making changes to your portfolio:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will automatically redeploy within 2-3 minutes.

---

## ❓ Troubleshooting

### Images Not Loading?
- Update image paths in components to use relative paths
- Already configured in your project ✓

### Styles Not Applying?
- Ensure `base: '/jitesh-tambakhe-portfolio/'` is set in vite.config.ts
- Already configured ✓

### Build Failing?
1. Check GitHub Actions tab for error logs
2. Ensure all dependencies are installed: `npm install`
3. Test locally: `npm run build`

### Still Having Issues?
- Check that your repository is public (Settings → General)
- Verify GitHub Pages is enabled (Settings → Pages)
- Enable Actions permissions (Settings → Actions → General)

---

## 📝 File Structure

```
jitesh-tambakhe-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment
├── components/                 # React components
├── images/                     # Portfolio images
├── dist/                       # Built files (created by npm run build)
├── vite.config.ts             # Configured for GitHub Pages
├── package.json               # Dependencies
└── index.html                 # Main HTML file
```

---

## 🎯 Your Portfolio URL

Once deployed, share this URL:
```
https://YOUR_USERNAME.github.io/jitesh-tambakhe-portfolio/
```

**Example:**
```
https://jiteshtambakhe.github.io/jitesh-tambakhe-portfolio/
```

---

## 💡 Pro Tips

1. **Custom Domain**: You can use a custom domain with GitHub Pages
2. **HTTPS**: GitHub Pages automatically provides HTTPS
3. **Caching**: GitHub Pages caches content, changes may take 1-2 min to appear
4. **Free Hosting**: GitHub Pages is completely free!

---

For more info: https://pages.github.com/
