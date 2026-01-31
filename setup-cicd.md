# 🚀 CI/CD Setup Guide for TOON Extension

This guide will help you set up automated CI/CD for your TOON VS Code extension.

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **VS Code Marketplace Account**: Publisher account on [Visual Studio Marketplace](https://marketplace.visualstudio.com/)
3. **Personal Access Token**: For publishing to marketplace

---

## 🔑 Step 1: Get Your Personal Access Token (PAT)

### For VS Code Marketplace:

1. Go to [Azure DevOps](https://dev.azure.com/)
2. Sign in with your Microsoft account
3. Click on your profile → **Personal Access Tokens**
4. Click **+ New Token**
5. Configure:
   - **Name**: `TOON Extension Publishing`
   - **Organization**: Select your organization
   - **Expiration**: 1 year (or custom)
   - **Scopes**: Select **Custom defined**
   - **Marketplace**: Check **Manage** permission
6. Click **Create** and **copy the token** (you won't see it again!)

### For Open VSX Registry (optional):

1. Go to [Open VSX Registry](https://open-vsx.org/)
2. Sign in with GitHub
3. Go to your profile → **Access Tokens**
4. Create a new token with **publish** permission

---

## 🔧 Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

### Required Secrets:

| Secret Name | Description | Value |
|-------------|-------------|-------|
| `VSCE_PAT` | VS Code Marketplace Personal Access Token | Your Azure DevOps PAT |
| `OVSX_PAT` | Open VSX Registry Token (optional) | Your Open VSX token |

### How to add secrets:
```
Name: VSCE_PAT
Secret: [paste your Azure DevOps PAT here]
```

---

## 📁 Step 3: Verify Workflow Files

Make sure these files are in your repository:

```
.github/
└── workflows/
    ├── ci-cd.yml           # Main CI/CD pipeline
    ├── version-bump.yml    # Automated version bumping
    └── security-monitor.yml # Security monitoring
```

---

## 🎯 Step 4: Configure Branch Protection (Recommended)

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Select: `build-and-test` and `security-check`
   - ✅ Restrict pushes that create files larger than 100MB

---

## 🚀 Step 5: Test Your CI/CD

### Automatic Triggers:

1. **Push to main/develop**: Triggers build and test
2. **Pull Request**: Runs full CI pipeline
3. **Create Release**: Automatically publishes to marketplace

### Manual Triggers:

1. **Version Bump**: Go to **Actions** → **Version Bump and Release** → **Run workflow**
2. **Security Check**: Go to **Actions** → **Security Monitoring** → **Run workflow**

---

## 📦 Step 6: Create Your First Release

### Option A: Manual Release
```bash
# 1. Update version in package.json
npm version patch  # or minor/major

# 2. Push changes
git add .
git commit -m "chore: bump version to x.x.x"
git push origin main

# 3. Create GitHub release
git tag v0.2.1
git push origin v0.2.1
```

### Option B: Automated Release
1. Go to **Actions** → **Version Bump and Release**
2. Click **Run workflow**
3. Select version type (patch/minor/major)
4. Click **Run workflow**

---

## 🔍 Step 7: Monitor Your Workflows

### Workflow Status:
- **Green ✅**: All checks passed
- **Red ❌**: Something failed (check logs)
- **Yellow 🟡**: In progress

### Key Workflows:

1. **CI/CD Pipeline** (`ci-cd.yml`):
   - Builds and tests on every push/PR
   - Publishes to marketplace on release

2. **Version Bump** (`version-bump.yml`):
   - Automatically bumps version
   - Creates GitHub release
   - Triggers marketplace publishing

3. **Security Monitor** (`security-monitor.yml`):
   - Daily security audits
   - Dependency vulnerability checks
   - Creates issues for security problems

---

## 📊 Step 8: Verify Marketplace Publishing

After a successful release:

1. Check [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon)
2. Verify version number updated
3. Test installation: `code --install-extension vishalraut.vscode-toon`

---

## 🐛 Troubleshooting

### Common Issues:

#### 1. **VSCE_PAT Invalid**
```
Error: Failed request: (401) Unauthorized
```
**Solution**: Regenerate your Azure DevOps PAT and update the secret

#### 2. **Version Mismatch**
```
Version mismatch! Package version doesn't match release tag
```
**Solution**: Ensure package.json version matches your git tag

#### 3. **Build Failures**
```
npm ERR! code ELIFECYCLE
```
**Solution**: Check the build logs, usually TypeScript compilation errors

#### 4. **Permission Denied**
```
Error: Access denied
```
**Solution**: Verify your PAT has correct permissions (Marketplace → Manage)

---

## 🔐 Security Best Practices

1. **Never commit secrets** to your repository
2. **Use GitHub secrets** for all sensitive data
3. **Regularly rotate** your personal access tokens
4. **Monitor security alerts** from the automated workflows
5. **Review dependencies** regularly for vulnerabilities

---

## 📈 Monitoring and Maintenance

### Daily:
- ✅ Check GitHub Actions status
- ✅ Monitor security alerts

### Weekly:
- ✅ Review marketplace analytics
- ✅ Check for dependency updates

### Monthly:
- ✅ Rotate access tokens
- ✅ Review and update workflows
- ✅ Check for fake extensions in marketplace

---

## 🎉 Success Checklist

- [ ] Azure DevOps PAT created and added to GitHub secrets
- [ ] Workflow files committed to repository
- [ ] Branch protection rules configured
- [ ] First release created successfully
- [ ] Extension published to marketplace
- [ ] Security monitoring active
- [ ] Documentation updated

---

## 📞 Support

If you encounter issues:

1. **Check workflow logs** in GitHub Actions
2. **Review this guide** for common solutions
3. **Create an issue** in your repository
4. **Check VS Code extension documentation**

---

## 🚀 Next Steps

Once CI/CD is working:

1. **Set up automated testing** (unit tests, integration tests)
2. **Add code coverage** reporting
3. **Configure notifications** (Slack, email, etc.)
4. **Set up staging environment** for pre-release testing
5. **Add performance monitoring**

---

*Your TOON extension will now be automatically built, tested, and published with every release! 🎉*