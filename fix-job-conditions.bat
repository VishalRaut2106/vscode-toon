@echo off
echo 🔧 Fixing CI/CD Job Conditions
echo.

echo The issue: release-to-marketplace job is skipped because
echo it only runs on 'release' events, but manual trigger is 'workflow_dispatch'
echo.

echo Step 1: Adding condition fix...
git add .github/workflows/ci-cd.yml

echo.
echo Step 2: Committing job condition fix...
git commit -m "fix: allow release-to-marketplace job to run on manual trigger

- Update condition to include workflow_dispatch events
- Fix job skipping issue when manually triggering CI/CD
- Enable marketplace publishing via manual workflow runs"

echo.
echo Step 3: Pushing fix to GitHub...
git push origin main

echo.
echo ✅ Job condition fix pushed!
echo.
echo 📋 Now you can:
echo 1. Go to Actions → CI/CD Pipeline → Run workflow
echo 2. The release-to-marketplace job should run (not skip)
echo 3. Extension will publish to marketplace
pause