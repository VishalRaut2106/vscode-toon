@echo off
echo 🔧 Visual Studio Marketplace Quick Fix
echo.

echo 1. Flushing DNS cache...
ipconfig /flushdns

echo.
echo 2. Resetting network settings...
netsh winsock reset

echo.
echo 3. Clearing browser DNS cache...
echo Please manually clear browser cache:
echo Chrome: Ctrl+Shift+Delete
echo Edge: Ctrl+Shift+Delete
echo.

echo 4. Testing marketplace connectivity...
ping marketplace.visualstudio.com

echo.
echo 5. Testing Azure DevOps connectivity...
ping dev.azure.com

echo.
echo ✅ Network fixes applied!
echo Please restart your browser and try again.
echo.
echo 📋 URLs to try:
echo 1. https://marketplace.visualstudio.com/manage
echo 2. https://dev.azure.com/
echo 3. https://marketplace.visualstudio.com/manage/createpublisher
echo.
pause