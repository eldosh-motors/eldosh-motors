@echo off
title ELDOSH Motors - Deploy
cd /d "E:\SKRIPT\ELDOSH SAYT"

echo.
echo ==========================================
echo       ELDOSH MOTORS - DEPLOY
echo ==========================================
echo.
echo [1/2] Building website...
call npm run build

if errorlevel 1 (
    echo.
    echo ==========================================
    echo BUILD ERROR! Deployment cancelled.
    echo ==========================================
    pause
    exit /b 1
)

echo.
echo [2/2] Uploading to Cloudflare Pages...
call npx wrangler pages deploy dist --project-name=eldosh

if errorlevel 1 (
    echo.
    echo ==========================================
    echo DEPLOY ERROR!
    echo ==========================================
    pause
    exit /b 1
)

echo.
echo ==========================================
echo        DEPLOY SUCCESSFUL!
echo ==========================================
echo.
echo Website: https://eldosh.pages.dev
echo.
pause
