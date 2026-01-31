# 🚀 CI/CD Setup - Step by Step Guide

## ✅ **Prerequisites Complete:**
- [x] Token validated: `[YOUR_AZURE_DEVOPS_PAT_HERE]`
- [x] Publisher working: `vishalraut`
- [x] Extension active: `vishalraut.vscode-toon` (551 installs)
- [x] Workflow files ready: `.github/workflows/`

---

## 🔐 **Step 1: Add GitHub Secrets**

### **Method A: Via GitHub Web Interface (Recommended)**

1. **Open your repository**: https://github.com/vishalraut2106/vscode-toon
2. **Click "Settings"** (top menu)
3. **Click "Secrets and variables"** → **"Actions"** (left sidebar)
4. **Click "New repository secret"**
5. **Add the secret**:
   ```
   Name: VSCE_PAT
   Secret: [YOUR_AZURE_DEVOPS_PAT_HERE]
   ```
6. **Click "Add secret"**

### **Verification**
You should see: `✅ VSCE_PAT - Updated now`

---

## 🔄 **Step 2: Push Workflow Files to GitHub**

Make sure all workflow files are committed and pushed:

```bash
# Check status
git status

# Add all files
git add .

# Commit workflows
git commit -m "feat: add complete CI/CD pipeline with security and automation"

# Push to GitHub
git push origin main
```

---

## 🧪 **Step 3: Test CI/CD Pipeline**

### **Method A: Push Test (Automatic Trigger)**

```bash
# Make a small test change
echo "# CI/CD Pipeline Active" >> README.md

# Commit and push
git add README.md
git commit -m "test: verify CI/CD pipeline activation"
git push origin main

# Check GitHub Actions tab
```

### **Method B: Manual Workflow Trigger**

1. **Go to**: https://github.com/vishalraut2106/vscode-toon/actions
2. **Click**: "Version Bump and Release" workflow
3. **Click**: "Run workflow" button
4. **Select**: 
   - Branch: `main`
   - Version type: `patch` (0.2.1 → 0.2.2)
   - Pre-release: `false`
5. **Click**: "Run workflow"

---

## 📊 **Step 4: Monitor Workflow Execution**

### **Expected Workflow Sequence:**

1. **Version Bump Workflow** (if triggered manually):
   - ✅ Bump version in package.json
   - ✅ Update CHANGELOG.md
   - ✅ Create GitHub release
   - ✅ Trigger CI/CD pipeline

2. **CI/CD Pipeline** (triggered by release):
   - ✅ Build and Test (Node 18.x, 20.x)
   - ✅ Security Check
   - ✅ Package extension
   - ✅ **Publish to VS Code Marketplace**
   - ✅ Upload artifacts

3. **Security Monitor** (daily):
   - ✅ Dependency audit
   - ✅ Vulnerability check
   - ✅ Extension verification

---

## 🎯 **Step 5: Verify Marketplace Publishing**

After successful workflow:

1. **Check marketplace**: https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon
2. **Verify new version** is published
3. **Test installation**: `code --install-extension vishalraut.vscode-toon`

---

## 🔍 **Step 6: Monitor and Maintain**

### **GitHub Actions Dashboard**
- **URL**: https://github.com/vishalraut2106/vscode-toon/actions
- **Monitor**: Workflow status, logs, artifacts

### **Marketplace Analytics**
- **URL**: https://marketplace.visualstudio.com/manage/publishers/vishalraut
- **Track**: Downloads, installs, ratings

### **Security Monitoring**
- **Automatic**: Daily security audits
- **Manual**: Check for dependency updates

---

## 🚨 **Troubleshooting**

### **Common Issues:**

#### **1. "VSCE_PAT not found"**
```
Error: Secret VSCE_PAT not found
Solution: Add the secret in GitHub repository settings
```

#### **2. "401 Unauthorized"**
```
Error: Failed request: (401) Unauthorized
Solution: Token expired, generate new one from Azure DevOps
```

#### **3. "Version already exists"**
```
Error: Version 0.2.1 already exists
Solution: Bump version number in package.json
```

#### **4. "Build failed"**
```
Error: TypeScript compilation failed
Solution: Fix compilation errors, run npm run compile locally
```

---

## ✅ **Success Indicators**

### **Workflow Success:**
- ✅ All GitHub Actions show green checkmarks
- ✅ New version appears on marketplace
- ✅ Extension installs correctly
- ✅ No error notifications

### **Marketplace Success:**
- ✅ Version number updated
- ✅ Install count increases
- ✅ Extension works in VS Code
- ✅ Official badges visible

---

## 🎉 **Automation Benefits**

Once setup is complete, you get:

### **Automatic Publishing:**
- Create GitHub release → Auto-publish to marketplace
- Version management → Automatic changelog updates
- Quality assurance → Automated testing before publish

### **Security Monitoring:**
- Daily vulnerability scans
- Dependency update notifications
- Automatic issue creation for security problems

### **Professional Workflow:**
- Consistent versioning
- Automated documentation
- Release notes generation
- Artifact management

---

## 📋 **Quick Commands Reference**

```bash
# Test token
vsce login vishalraut
vsce ls-publishers
vsce show vishalraut.vscode-toon

# Local development
npm run compile
npm run lint
npm run package

# Git workflow
git add .
git commit -m "feat: description"
git push origin main

# Manual release
git tag v0.2.2
git push origin v0.2.2
```

---

*Follow these steps and you'll have a professional CI/CD pipeline running in minutes! 🚀*