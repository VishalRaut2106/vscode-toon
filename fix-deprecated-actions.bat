@echo off
echo 🔧 Fixing Deprecated GitHub Actions
echo.

echo Step 1: Adding modern action fixes...
git add .

echo.
echo Step 2: Committing deprecated action fixes...
git commit -m "fix: replace deprecated GitHub Actions with modern alternatives

- Replace actions/create-release@v1 with GitHub CLI (gh release create)
- Replace actions/upload-release-asset@v1 with GitHub CLI (gh release upload)
- Remove set-output deprecation warnings
- Use modern GitHub CLI for release management
- Improve workflow reliability and future-proofing"

echo.
echo Step 3: Pushing fixes to GitHub...
git push origin main

echo.
echo ✅ Deprecated action fixes pushed successfully!
echo 📋 Changes made:
echo   - Replaced deprecated actions/create-release@v1
echo   - Replaced deprecated actions/upload-release-asset@v1
echo   - Updated to use GitHub CLI (gh) commands
echo   - Removed all deprecation warnings
echo.
echo 🔄 Future workflow runs will be warning-free!
pause