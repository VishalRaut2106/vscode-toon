@echo off
echo 🔧 Fixing CI/CD Pipeline Node.js Compatibility Error
echo.

echo Step 1: Adding fixes...
git add .

echo.
echo Step 2: Committing Node.js compatibility fix...
git commit -m "fix: resolve Node.js 18.x compatibility issue in CI/CD pipeline

- Update CI/CD to use Node.js 20.x and 22.x (remove 18.x)
- Update @vscode/vsce to v3.0.0 for better compatibility
- Add Node.js version requirement (>=20.0.0)
- Fix undici package compatibility issue
- Update dependencies to latest stable versions"

echo.
echo Step 3: Pushing fix to GitHub...
git push origin main

echo.
echo ✅ CI/CD fix pushed successfully!
echo 📋 Changes made:
echo   - Removed Node.js 18.x from CI/CD matrix
echo   - Updated to Node.js 20.x and 22.x
echo   - Updated @vscode/vsce to v3.0.0
echo   - Added Node.js version requirement
echo.
echo 🔄 The CI/CD pipeline should now work correctly!
pause