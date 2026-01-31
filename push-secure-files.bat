@echo off
echo 🔐 Pushing Files with Security Fix
echo.

echo Step 1: Adding security fixes...
git add .

echo.
echo Step 2: Committing security fix...
git commit -m "security: remove PAT tokens from documentation files

- Replace actual tokens with placeholders in all documentation
- Fix GitHub push protection violation
- Maintain security best practices in documentation"

echo.
echo Step 3: Pushing to GitHub...
git push origin main

echo.
echo ✅ Files pushed successfully with security fix!
echo 📋 All documentation now uses placeholder tokens
echo 🔐 Actual token should only be in GitHub secrets
pause