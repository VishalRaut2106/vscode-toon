# 🔐 GitHub Secret Setup Guide

## 🎯 **Add Your Token to GitHub Secrets**

### **Step 1: Go to Your Repository**
```
1. Open: https://github.com/vishalraut2106/vscode-toon
2. Click: Settings (top menu)
3. Click: Secrets and variables → Actions (left sidebar)
```

### **Step 2: Add New Secret**
```
1. Click: "New repository secret"
2. Name: VSCE_PAT
3. Secret: [YOUR_AZURE_DEVOPS_PAT_HERE]
4. Click: "Add secret"
```

### **Step 3: Verify Secret Added**
```
You should see:
✅ VSCE_PAT - Updated now
```

---

## 🚀 **Test CI/CD Pipeline**

### **Method 1: Push a Small Change**
```bash
# Make a small change to test
echo "# CI/CD Test" >> README.md
git add README.md
git commit -m "test: verify CI/CD pipeline with new token"
git push origin main

# Check GitHub Actions tab to see if it works
```

### **Method 2: Manual Workflow Trigger**
```
1. Go to: GitHub → Actions tab
2. Click: "Version Bump and Release"
3. Click: "Run workflow"
4. Select: "patch" version
5. Click: "Run workflow"
```

---

## ✅ **Expected Results**

### **If Token Works:**
```bash
vsce login vishalraut
# ✅ Successfully logged in as vishalraut

vsce ls-publishers  
# ✅ vishalraut

vsce show vishalraut.vscode-toon
# ✅ Shows extension details
```

### **If CI/CD Works:**
```
GitHub Actions should show:
✅ Build and Test
✅ Security Check
✅ Package Extension
```

---

## 🐛 **If Token Doesn't Work**

### **Error: "401 Unauthorized"**
```
Solution: Token might be expired or invalid
1. Go back to Azure DevOps
2. Generate new token with "Marketplace (Manage)" permission
3. Update GitHub secret
```

### **Error: "Publisher not found"**
```
Solution: Wrong Microsoft account
1. Try different Microsoft account in Azure DevOps
2. Look for account that has "vishalraut" publisher
```

### **Error: "Access denied"**
```
Solution: Insufficient permissions
1. Regenerate token
2. Ensure "Marketplace (Manage)" is selected
3. Set expiration to 1 year
```

---

## 📋 **Complete Setup Checklist**

- [ ] Token tested with `vsce login vishalraut`
- [ ] Publisher verified with `vsce ls-publishers`
- [ ] Extension accessible with `vsce show vishalraut.vscode-toon`
- [ ] GitHub secret VSCE_PAT added
- [ ] CI/CD pipeline tested
- [ ] Ready to publish updates

---

## 🎯 **Next Steps After Success**

1. **Test publish** (dry run): `vsce publish --dry-run`
2. **Update extension** with latest security features
3. **Create release** to trigger automatic publishing
4. **Monitor marketplace** for updates

---

*Test the token now and let me know the results! 🚀*