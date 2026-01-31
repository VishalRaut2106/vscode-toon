x# 🔐 GitHub Secrets Setup - Step by Step

## 🎯 **Add Your Publishing Token to GitHub**

### **Method 1: Via GitHub Web Interface**

1. **Open your repository**: https://github.com/vishalraut2106/vscode-toon
2. **Click "Settings"** (top menu bar)
3. **Click "Secrets and variables"** → **"Actions"** (left sidebar)
4. **Click "New repository secret"**
5. **Fill in**:
   ```
   Name: VSCE_PAT
   Secret: [YOUR_AZURE_DEVOPS_PAT_HERE]
   ```
6. **Click "Add secret"**

### **Method 2: Via GitHub CLI (Alternative)**

```bash
# If you have GitHub CLI installed
gh secret set VSCE_PAT --body "[YOUR_AZURE_DEVOPS_PAT_HERE]"
```

### **Verification**

After adding, you should see:
```
✅ VSCE_PAT - Updated now
```

---

## 🚀 **Optional: Add Open VSX Token (Recommended)**

For publishing to Open VSX Registry (alternative marketplace):

1. **Go to**: https://open-vsx.org/
2. **Sign in with GitHub**
3. **Profile** → **Access Tokens** → **New Token**
4. **Copy token** and add to GitHub secrets:
   ```
   Name: OVSX_PAT
   Secret: [your Open VSX token]
   ```

---

## ✅ **Secrets Checklist**

Required:
- [x] **VSCE_PAT** - VS Code Marketplace token

Optional but recommended:
- [ ] **OVSX_PAT** - Open VSX Registry token

---

*Once secrets are added, your CI/CD pipeline will be ready! 🎉*