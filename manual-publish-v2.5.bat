@echo off
echo 🚀 Manual Publishing v0.2.5 to Marketplace
echo.

echo Step 1: Checking current version...
node -p "require('./package.json').version"

echo.
echo Step 2: Compiling extension...
npm run compile

echo.
echo Step 3: Packaging extension...
npm run package

echo.
echo Step 4: Publishing to marketplace...
echo Note: You should be logged in with: vsce login vishalraut
vsce publish

echo.
echo ✅ Manual publishing complete!
echo 📋 Check marketplace: https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon
pause