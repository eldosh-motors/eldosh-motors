@echo off
setlocal

:: Ensure System32 and common Node.js paths are included in PATH
set "PATH=%SystemRoot%\System32;%SystemRoot%;%SystemRoot%\System32\Wbem;C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%LOCALAPPDATA%\Programs\nodejs;%APPDATA%\npm;%PATH%"

echo ===================================================
echo   ELDOSH MOTORS - Project Dependencies Installation
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
    echo If you already installed Node.js, please restart your computer or command prompt.
    echo.
    pause
    exit /b 1
)

echo [1/2] Node.js and NPM detected:
echo - Node version:
call node -v
echo - NPM version:
call npm -v
echo.

echo [2/2] Installing dependencies (npm install)...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo.
echo ===================================================
echo   Installation completed successfully!
echo   Run start.bat to launch the website.
echo ===================================================
echo.
pause
