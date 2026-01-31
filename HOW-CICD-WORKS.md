# 🚀 How Your TOON Extension CI/CD Pipeline Works

## 📋 **Overview**

Your CI/CD system has **3 automated workflows** that handle everything from testing to publishing:

1. **CI/CD Pipeline** (`ci-cd.yml`) - Main build, test, and publish workflow
2. **Version Bump** (`version-bump.yml`) - Automated version management
3. **Security Monitor** (`security-monitor.yml`) - Daily security checks

---

## 🔄 **Workflow 1: CI/CD Pipeline (Main Workflow)**

### **Triggers:**
- ✅ **Push to `main`** - Builds and tests
- ✅ **Push to `develop`** - Builds, tests, and creates pre-release
- ✅ **Pull Request** - Full validation
- ✅ **GitHub Release Created** - **Automatically publishes to marketplace**

### **What It Does:**

#### **Stage 1: Build & Test** (Runs on Node.js 20.x, 22.x)
```
1. ✅ Checkout code
2. ✅ Setup Node.js
3. ✅ Install dependencies (npm ci)
4. ✅ Run linting (npm run lint)
5. ✅ Compile TypeScript (npm run compile)
6. ✅ Run tests (if available)
7. ✅ Package extension (npm run package)
8. ✅ Upload artifacts for debugging
```

#### **Stage 2: Security Check**
```
1. ✅ Security audit (npm audit)
2. ✅ Check outdated packages
3. ✅ Verify official extension (node verify-official.js)
```

#### **Stage 3: Pre-release** (Only on `develop` branch)
```
1. ✅ Package as pre-release
2. ✅ Upload pre-release artifact
```

#### **Stage 4: Marketplace Publishing** (Only on GitHub Release)
```
1. ✅ Verify version matches release tag
2. ✅ Package extension
3. ✅ Publish to VS Code Marketplace (using VSCE_PAT)
4. ✅ Publish to Open VSX Registry (optional)
5. ✅ Attach VSIX to GitHub release
6. ✅ Send notifications
```

---

## 🏷️ **Workflow 2: Version Bump (Manual Trigger)**

### **How to Use:**
```
1. Go to: GitHub → Actions → "Version Bump and Release"
2. Click: "Run workflow"
3. Select: patch/minor/major
4. Click: "Run workflow"
```

### **What It Does:**
```
1. ✅ Bump version in package.json (e.g., 0.2.1 → 0.2.2)
2. ✅ Update CHANGELOG.md with new version
3. ✅ Commit changes to main branch
4. ✅ Create GitHub release with tag (e.g., v0.2.2)
5. ✅ Trigger CI/CD Pipeline (which publishes to marketplace)
```

### **Example:**
```bash
# If you select "patch":
# 0.2.1 → 0.2.2 (bug fixes)

# If you select "minor":
# 0.2.1 → 0.3.0 (new features)

# If you select "major":
# 0.2.1 → 1.0.0 (breaking changes)
```

---

## 🔐 **Workflow 3: Security Monitor (Automatic Daily)**

### **Triggers:**
- ✅ **Daily at 2 AM UTC** (automatic)
- ✅ **Manual trigger** (when needed)
- ✅ **Pull Request** (dependency review)

### **What It Does:**
```
1. ✅ Run security audit (npm audit)
2. ✅ Check for outdated packages
3. ✅ Verify extension authenticity
4. ✅ Monitor marketplace for fake extensions
5. ✅ Create GitHub issues if vulnerabilities found
6. ✅ Review dependencies in PRs
```

---

## 🎯 **Complete Automation Flow**

### **Scenario 1: Regular Development**
```
1. You make code changes
2. Push to main branch
3. CI/CD automatically:
   ✅ Tests your code
   ✅ Checks for errors
   ✅ Validates security
   ✅ Creates package
   ✅ Reports success/failure
```

### **Scenario 2: Publishing New Version**
```
1. You trigger "Version Bump and Release"
2. Select version type (patch/minor/major)
3. Automation does everything:
   ✅ Bumps version number
   ✅ Updates changelog
   ✅ Creates GitHub release
   ✅ Builds extension
   ✅ Publishes to VS Code Marketplace
   ✅ Publishes to Open VSX Registry
   ✅ Notifies you of success
```

### **Scenario 3: Pull Request Review**
```
1. Someone creates a pull request
2. CI/CD automatically:
   ✅ Tests the changes
   ✅ Checks security
   ✅ Reviews dependencies
   ✅ Reports if safe to merge
```

---

## 📊 **Monitoring & Notifications**

### **Where to Check Status:**
- **GitHub Actions**: https://github.com/vishalraut2106/vscode-toon/actions
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon
- **Email**: GitHub sends notifications on failures

### **Status Indicators:**
- 🟢 **Green**: All workflows passed
- 🔴 **Red**: Something failed (check logs)
- 🟡 **Yellow**: In progress
- ⚪ **Gray**: Skipped or not run

---

## 🛠️ **What You Need to Do**

### **One-Time Setup (Already Done):**
- ✅ Workflows pushed to GitHub
- ✅ Dependencies updated
- ✅ Node.js compatibility fixed

### **Still Need to Do:**
- [ ] **Add GitHub Secret**: `VSCE_PAT` with your token
- [ ] **Test the pipeline**: Create a release

### **Regular Usage:**
```
# To publish new version:
1. Go to Actions → "Version Bump and Release"
2. Click "Run workflow"
3. Select version type
4. Click "Run workflow"
5. ✅ Done! Everything else is automatic

# To develop:
1. Make changes
2. git push origin main
3. ✅ CI/CD automatically tests and validates
```

---

## 🎉 **Benefits You Get**

### **Automatic Quality Assurance:**
- ✅ Every change is tested before deployment
- ✅ Security vulnerabilities caught early
- ✅ Code quality maintained with linting
- ✅ Extension packaging validated

### **Zero-Effort Publishing:**
- ✅ One click to publish new version
- ✅ Automatic marketplace publishing
- ✅ Automatic changelog updates
- ✅ Automatic GitHub releases

### **Professional Workflow:**
- ✅ Consistent versioning
- ✅ Automated documentation
- ✅ Security monitoring
- ✅ Error notifications

### **Time Savings:**
- ✅ No manual building
- ✅ No manual publishing
- ✅ No manual testing
- ✅ No manual version management

---

## 🚨 **Error Handling**

### **If CI/CD Fails:**
1. **Check GitHub Actions** for error details
2. **Fix the issue** in your code
3. **Push the fix** - CI/CD runs again automatically

### **If Publishing Fails:**
1. **Check token expiration** (VSCE_PAT)
2. **Verify marketplace permissions**
3. **Check version conflicts**

### **If Security Issues Found:**
1. **GitHub creates automatic issue**
2. **Review vulnerability details**
3. **Update dependencies**: `npm audit fix`
4. **Push fix** - CI/CD validates automatically

---

## 📋 **Quick Commands Reference**

### **Local Development:**
```bash
npm run compile      # Build TypeScript
npm run lint         # Check code quality
npm run package      # Create VSIX package
npm run validate-cicd # Check CI/CD setup
```

### **Git Workflow:**
```bash
git add .
git commit -m "feat: description"
git push origin main  # Triggers CI/CD
```

### **Manual Publishing:**
```bash
# Alternative to automated workflow
vsce publish patch   # Publish patch version
vsce publish minor   # Publish minor version
vsce publish major   # Publish major version
```

---

## 🎯 **Next Steps**

1. **Add GitHub Secret** (VSCE_PAT)
2. **Test Version Bump** workflow
3. **Verify Marketplace Publishing**
4. **Set up notifications** (optional)
5. **Enjoy automated publishing!** 🚀

---

*Your CI/CD pipeline is now a professional-grade system that handles everything automatically! 🎉*