@echo off
setlocal

:: Ensure System32 and common Node.js paths are included in PATH
set "PATH=%SystemRoot%\System32;%SystemRoot%;%SystemRoot%\System32\Wbem;C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%LOCALAPPDATA%\Programs\nodejs;%APPDATA%\npm;%PATH%"

echo ===================================================
echo   ELDOSH MOTORS - Starting Local Web Server
echo ===================================================
echo.

:: Ensure required directories exist
if not exist public mkdir public
if not exist src\assets mkdir src\assets


node -v >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found in your system.
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

if not exist node_modules (
    echo [NOTICE] node_modules not found.
    echo Running dependency installation first...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Installation failed.
        pause
        exit /b 1
    )
)

echo Starting Vite development server...
echo Local address: http://localhost:3000
echo Press Ctrl + C to stop the server.
echo.

call npm run dev
pause
