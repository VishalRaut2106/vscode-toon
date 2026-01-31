@echo off
echo 🔍 Debugging CI/CD Pipeline Issue
echo.

echo Step 1: Checking current local version...
type package.json | findstr "version"

echo.
echo Step 2: Testing VSCE login...
echo Testing if your token works locally...
vsce ls-publishers

echo.
echo Step 3: Checking marketplace current version...
echo Go to: https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon
echo Check what version is shown there

echo.
echo Step 4: Manual test publish (dry run)...
vsce package
echo Package created successfully? Check for .vsix file

echo.
echo Step 5: Check GitHub Actions...
echo Go to: https://github.com/vishalraut2106/vscode-toon/actions
echo Look for:
echo   - Version Bump and Release (should be green)
echo   - CI/CD Pipeline (should run after release)

echo.
echo Step 6: Check GitHub Releases...
echo Go to: https://github.com/vishalraut2106/vscode-toon/releases
echo Verify v0.2.5 is Published (not Draft)

echo.
echo 📋 Debug Results:
echo 1. Local version: [Check above]
echo 2. VSCE login: [Check above]
echo 3. Marketplace version: [Check manually]
echo 4. Package creation: [Check above]
echo 5. GitHub Actions: [Check manually]
echo 6. Release status: [Check manually]
pause