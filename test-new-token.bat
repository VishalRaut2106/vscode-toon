@echo off
echo ========================================
echo Testing New VSCE Token
echo ========================================
echo.

REM Check if VSCE is installed
echo [1/4] Checking VSCE installation...
call npm list -g @vscode/vsce >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing VSCE globally...
    call npm install -g @vscode/vsce
) else (
    echo ✅ VSCE already installed
)
echo.

REM Prompt for token
echo [2/4] Token Authentication Test
set /p "token=Enter your new Azure DevOps PAT token: "
echo.

REM Test login
echo [3/4] Testing VSCE login...
echo %token% | vsce login vishalraut
if %errorlevel% neq 0 (
    echo ❌ Login failed! Check your token permissions.
    echo Make sure you selected "Marketplace → Manage" scope.
    pause
    exit /b 1
)
echo ✅ Login successful!
echo.

REM List publishers
echo [4/4] Verifying publisher access...
call vsce ls-publishers
if %errorlevel% neq 0 (
    echo ❌ Cannot access publishers. Check token permissions.
    pause
    exit /b 1
)
echo.

echo ========================================
echo ✅ Token Test Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Update GitHub secret VSCE_PAT with this token
echo 2. Run "Publish to Marketplace" workflow
echo 3. Check marketplace for v0.2.5 update
echo.
pause