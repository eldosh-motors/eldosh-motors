@echo off
setlocal

set "PATH=%SystemRoot%\System32;%SystemRoot%;C:\Program Files\nodejs;%LOCALAPPDATA%\Programs\nodejs;%APPDATA%\npm;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;%LOCALAPPDATA%\GitHubDesktop\app-*\resources\app\git\cmd;%LOCALAPPDATA%\Programs\Git\bin;%PATH%"

echo ===================================================
echo   ELDOSH MOTORS - Deploy to GitHub Pages
echo ===================================================
echo.

node -v >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Install from: https://nodejs.org/
    pause
    exit /b 1
)

git -v >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git not found. Install from: https://git-scm.com/
    pause
    exit /b 1
)

echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo.
echo [2/3] Building production bundle...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed. Check TypeScript errors above.
    pause
    exit /b 1
)

echo.
echo [3/3] Publishing to GitHub Pages (gh-pages branch)...
call npm run deploy
if %errorlevel% neq 0 (
    echo [ERROR] Deploy failed. Make sure git remote is set up correctly.
    pause
    exit /b 1
)

echo.
echo ===================================================
echo   SUCCESS! Site is published on GitHub Pages!
echo   Your URL: https://eldosh-motors.github.io/ELDOSH-SAYT/
echo ===================================================
echo.
pause
