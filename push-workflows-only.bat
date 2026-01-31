@echo off
echo 🚀 Pushing Only Workflow Files to GitHub
echo.

echo Step 1: Adding only .github directory...
git add .github/

echo.
echo Step 2: Checking what will be committed...
git status --porcelain | findstr ".github"

echo.
echo Step 3: Committing workflow files...
git commit -m "feat: add CI/CD workflows for automated publishing and security monitoring"

echo.
echo Step 4: Pushing to GitHub...
git push origin main

echo.
echo ✅ Workflow files pushed successfully!
echo 📋 Next: Add GitHub secrets (VSCE_PAT)
echo 🔗 Go to: https://github.com/vishalraut2106/vscode-toon/settings/secrets/actions
pause