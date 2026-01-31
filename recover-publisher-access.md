# 🔐 Publisher Account Recovery Guide

## ✅ **Good News**: Your extension is already published!
**Extension URL**: https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon

## 🚨 **Issue**: Cannot access publisher account or token expired

---

## 🔧 **Step 1: Recover Publisher Account Access**

### **Method A: Direct Login Recovery**

1. **Go to**: https://marketplace.visualstudio.com/manage
2. **Sign in** with the **same Microsoft account** you used before
3. **If you forgot which account**:
   - Try all your Microsoft accounts
   - Check your email for old marketplace notifications
   - Look for Azure DevOps emails

### **Method B: Azure DevOps Route**

1. **Go to**: https://dev.azure.com/
2. **Sign in** with your Microsoft account
3. **Check organizations** - look for one that has marketplace access
4. **From Azure DevOps**, navigate to marketplace management

### **Method C: Account Recovery**

If you can't remember the account:
1. **Go to**: https://account.microsoft.com/
2. **Try account recovery** with your email/phone
3. **Check all your email accounts** for marketplace notifications

---

## 🔑 **Step 2: Get New Personal Access Token**

### **Once you're logged in to Azure DevOps:**

1. **Click your profile picture** (top right)
2. **Select "Personal Access Tokens"**
3. **Click "New Token"**
4. **Configure the token**:
   ```
   Name: TOON Extension Publishing 2025
   Organization: All accessible organizations
   Expiration: 1 year (or custom)
   Scopes: Custom defined
   ```
5. **Select Marketplace permissions**:
   - ✅ **Marketplace (Manage)** - This is crucial!
6. **Click "Create"**
7. **Copy the token immediately** (you won't see it again!)

### **Token Format Example**:
```
Your token will look like: 
abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz
```

---

## 🧪 **Step 3: Test Your New Token**

### **Test with VSCE:**

```bash
# Login with new token
vsce login vishalraut

# When prompted, paste your new token
# It should say: "Successfully logged in as vishalraut"

# Test by checking your extensions
vsce ls-publishers

# Should show: vishalraut
```

### **Test Publishing (Dry Run):**

```bash
# Test package creation (doesn't publish)
vsce package --dry-run

# If successful, you're ready to publish updates!
```

---

## 🔄 **Step 4: Update CI/CD with New Token**

### **Update GitHub Secrets:**

1. **Go to your GitHub repository**
2. **Settings** → **Secrets and variables** → **Actions**
3. **Find "VSCE_PAT"** secret
4. **Click "Update"**
5. **Paste your new token**
6. **Save**

### **Test CI/CD Pipeline:**

```bash
# Create a small change to test
echo "# Test update" >> README.md
git add README.md
git commit -m "test: verify CI/CD with new token"
git push origin main

# Check GitHub Actions to see if it works
```

---

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Publisher not found"**
```
Error: Failed request: (404) Not Found
```
**Solution**: 
- Double-check publisher name: `vishalraut`
- Verify you're using the correct Microsoft account
- Try: `vsce ls-publishers` to see available publishers

### **Issue 2: "Access denied"**
```
Error: Failed request: (401) Unauthorized
```
**Solution**:
- Token expired or invalid
- Generate new token with correct permissions
- Ensure "Marketplace (Manage)" permission is selected

### **Issue 3: "Cannot find organization"**
```
Error: No organizations found
```
**Solution**:
- Create new Azure DevOps organization
- Or find the correct Microsoft account that has access

### **Issue 4: "Token permissions insufficient"**
```
Error: Insufficient permissions
```
**Solution**:
- Regenerate token with "Marketplace (Manage)" permission
- Ensure token is for "All accessible organizations"

---

## 🔍 **Step 5: Verify Everything Works**

### **Check Your Extension Status:**

1. **Marketplace URL**: https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon
2. **Install test**: `code --install-extension vishalraut.vscode-toon`
3. **Version check**: Look at current version on marketplace

### **Test Update Process:**

```bash
# Make a small change
npm version patch

# Test publish
vsce publish --dry-run

# If successful, you can now publish updates!
```

---

## 📞 **If Still Having Issues**

### **Microsoft Support:**
- **URL**: https://developer.microsoft.com/support
- **Issue**: "Cannot access existing publisher account"
- **Details**: Provide your publisher name: `vishalraut`

### **Alternative Recovery:**
- **Email**: vscodeext@microsoft.com
- **Subject**: "Publisher Account Recovery - vishalraut"
- **Content**: 
  ```
  I have an existing publisher account "vishalraut" with published extension:
  https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon
  
  I cannot access my publisher management page or my token has expired.
  Please help me recover access to my account.
  
  Microsoft Account: [your email]
  Publisher: vishalraut
  Extension: TOON - Token-Efficient Data Format
  ```

---

## ✅ **Success Checklist**

- [ ] Logged into correct Microsoft account
- [ ] Can access Azure DevOps
- [ ] Generated new Personal Access Token
- [ ] Token has "Marketplace (Manage)" permission
- [ ] Successfully logged in with `vsce login vishalraut`
- [ ] Can see publisher with `vsce ls-publishers`
- [ ] Updated GitHub secret VSCE_PAT
- [ ] Tested CI/CD pipeline
- [ ] Can publish updates

---

## 🎯 **Next Steps After Recovery**

1. **Update extension** with latest security features
2. **Test CI/CD pipeline** with new token
3. **Publish new version** (0.2.1) with security updates
4. **Set calendar reminder** to renew token before expiration
5. **Document token location** for future reference

---

*Once you recover access, your CI/CD pipeline will work perfectly with the new token! 🚀*