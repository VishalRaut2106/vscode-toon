@echo off
echo 🔧 Fixing GitHub Actions Permissions Issue
echo.

echo Step 1: Adding permission fixes...
git add .

echo.
echo Step 2: Committing permission fix...
git commit -m "fix: add GitHub Actions permissions for version bump workflow

- Add contents: write permission to version-bump workflow
- Fix github-actions[bot] permission denied error
- Enable automatic version bumping and release creation"

echo.
echo Step 3: Pushing fix to GitHub...
git push origin main

echo.
echo ✅ Permission fix pushed successfully!
echo.
echo 📋 Next steps:
echo 1. Go to: https://github.com/vishalraut2106/vscode-toon/settings/actions
echo 2. Under "Workflow permissions" select "Read and write permissions"
echo 3. Check "Allow GitHub Actions to create and approve pull requests"
echo 4. Click "Save"
echo 5. Re-run the "Version Bump and Release" workflow
echo.
pause