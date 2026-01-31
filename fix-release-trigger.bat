@echo off
echo 🔧 Fixing Release Trigger Issue
echo.

echo Step 1: Adding workflow fixes...
git add .

echo.
echo Step 2: Committing release trigger fix...
git commit -m "fix: improve CI/CD pipeline release triggers

- Add 'created' trigger in addition to 'published'
- Add workflow_dispatch for manual triggering
- Improve reliability of release-based publishing
- Fix marketplace publishing automation"

echo.
echo Step 3: Pushing fix to GitHub...
git push origin main

echo.
echo ✅ Release trigger fix pushed!
echo.
echo 📋 Next steps:
echo 1. Go to: https://github.com/vishalraut2106/vscode-toon/actions
echo 2. Click: "CI/CD Pipeline" workflow
echo 3. Click: "Run workflow" (manual trigger for v0.2.5)
echo 4. Watch it publish to marketplace
echo.
echo 🔄 Future releases should auto-trigger correctly!
pause