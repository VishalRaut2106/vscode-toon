@echo off
echo 🔑 Testing VSCE Token for TOON Extension
echo.

echo Step 1: Testing login...
echo When prompted, paste your token: [YOUR_AZURE_DEVOPS_PAT_HERE]
echo.

vsce login vishalraut

echo.
echo Step 2: Checking publishers...
vsce ls-publishers

echo.
echo Step 3: Checking your extension...
vsce show vishalraut.vscode-toon

echo.
echo Step 4: Testing package creation...
vsce package --dry-run

echo.
echo ✅ If all steps passed, your token is working!
echo 📋 Next: Set up GitHub secrets
pause