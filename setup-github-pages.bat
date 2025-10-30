@echo off
REM GitHub Pages Deployment Setup Script for Windows PowerShell
REM This script automates the setup process for GitHub Pages

echo.
echo ========================================
echo  GitHub Pages Deployment Setup
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [✓] Git and Node.js detected
echo.

REM Initialize Git if needed
if not exist .git (
    echo [*] Initializing Git repository...
    call git init
    call git add .
    call git commit -m "Initial commit: Portfolio with elegant dark theme"
    echo [✓] Git repository initialized
) else (
    echo [✓] Git repository already exists
)

echo.
echo ========================================
echo  Next Steps:
echo ========================================
echo.
echo 1. Create a GitHub repository at https://github.com/new
echo    Name it: jitesh-tambakhe-portfolio
echo.
echo 2. After creating the repository, run these commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/jitesh-tambakhe-portfolio.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Then GitHub Actions will automatically build and deploy your site!
echo.
echo Your portfolio will be available at:
echo https://YOUR_USERNAME.github.io/jitesh-tambakhe-portfolio/
echo.
echo ========================================
echo.

pause
