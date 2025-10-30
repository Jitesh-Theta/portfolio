# GitHub Pages Deployment Setup Script for Windows PowerShell
# This script automates the setup process for GitHub Pages deployment

Write-Host "`n========================================"
Write-Host "  GitHub Pages Deployment Setup" -ForegroundColor Cyan
Write-Host "========================================`n"

# Check if Git is installed
$gitCheck = git --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if Node.js is installed
$nodeCheck = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[✓] Git detected: $gitCheck" -ForegroundColor Green
Write-Host "[✓] Node.js detected: $nodeCheck" -ForegroundColor Green
Write-Host "`n"

# Initialize Git if needed
if (-not (Test-Path .git)) {
    Write-Host "[*] Initializing Git repository..." -ForegroundColor Yellow
    git init | Out-Null
    git add . | Out-Null
    git commit -m "Initial commit: Portfolio with elegant dark theme" 2>$null | Out-Null
    Write-Host "[✓] Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "[✓] Git repository already exists" -ForegroundColor Green
}

# Install dependencies
Write-Host "`n[*] Installing dependencies..." -ForegroundColor Yellow
npm install
Write-Host "[✓] Dependencies installed" -ForegroundColor Green

# Build the project
Write-Host "`n[*] Building portfolio..." -ForegroundColor Yellow
npm run build
Write-Host "[✓] Build complete" -ForegroundColor Green

Write-Host "`n========================================"
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "========================================`n"

Write-Host "Next Steps:`n" -ForegroundColor Cyan

Write-Host "1. Create a GitHub repository at:`n   https://github.com/new`n" -ForegroundColor White
Write-Host "   Recommended name: portfolio`n"

Write-Host "2. After creating, run these commands:`n" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git`n   git branch -M main`n   git push -u origin main`n"

Write-Host "3. GitHub Actions will automatically deploy your portfolio!`n"

Write-Host "Your portfolio will be available at:`n" -ForegroundColor Cyan
Write-Host "https://YOUR_USERNAME.github.io/portfolio/`n"

Write-Host "========================================`n"

Read-Host "Press Enter to exit"
