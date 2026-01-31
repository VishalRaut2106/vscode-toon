# 🚀 CI/CD Quick Reference

## 🔑 Essential Setup (One-time)

1. **Get Azure DevOps PAT**: [dev.azure.com](https://dev.azure.com) → Profile → Personal Access Tokens
2. **Add GitHub Secret**: Repository → Settings → Secrets → `VSCE_PAT`
3. **Push workflows**: Commit `.github/workflows/` files

## ⚡ Quick Commands

```bash
# Validate CI/CD setup
npm run validate-cicd

# Verify official extension
npm run verify-official

# Security audit
npm run security-audit

# Check outdated packages
npm run outdated

# Lint and fix
npm run lint:fix

# Clean build artifacts
npm run clean
```

## 🎯 Workflow Triggers

| Trigger | Workflow | Action |
|---------|----------|--------|
| Push to `main` | CI/CD Pipeline | Build + Test |
| Push to `develop` | CI/CD Pipeline | Build + Test + Pre-release |
| Pull Request | CI/CD Pipeline | Build + Test + Security |
| Create Release | CI/CD Pipeline | **Publish to Marketplace** |
| Manual | Version Bump | Bump version + Create release |
| Daily 2 AM | Security Monitor | Security audit + Dependency check |

## 🚀 Release Process

### Option A: Automated (Recommended)
1. Go to **Actions** → **Version Bump and Release**
2. Click **Run workflow**
3. Select version type: `patch` / `minor` / `major`
4. Click **Run workflow**
5. ✅ Done! Auto-publishes to marketplace

### Option B: Manual
```bash
# 1. Bump version
npm version patch  # or minor/major

# 2. Push changes
git push origin main

# 3. Create release on GitHub
# This triggers marketplace publishing
```

## 🔍 Monitoring

### GitHub Actions Status
- **Green ✅**: All good
- **Red ❌**: Check logs
- **Yellow 🟡**: In progress

### Key URLs
- **Actions**: `https://github.com/[username]/vscode-toon/actions`
- **Marketplace**: `https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon`
- **Releases**: `https://github.com/[username]/vscode-toon/releases`

## 🐛 Troubleshooting

| Error | Solution |
|-------|----------|
| `401 Unauthorized` | Regenerate Azure DevOps PAT |
| `Version mismatch` | Ensure package.json matches git tag |
| `Build failed` | Check TypeScript compilation errors |
| `Access denied` | Verify PAT has Marketplace → Manage permission |

## 🔐 Security Checklist

- [ ] GitHub secrets configured (never commit tokens)
- [ ] Branch protection enabled on `main`
- [ ] Security monitoring active
- [ ] Regular dependency updates
- [ ] Official verification badges visible

## 📊 Success Indicators

- [ ] ✅ All workflow checks pass
- [ ] 🚀 Extension auto-publishes on release
- [ ] 🔐 Security monitoring active
- [ ] 📈 Marketplace shows latest version
- [ ] 🎯 Installation works: `code --install-extension vishalraut.vscode-toon`

## 🆘 Emergency Procedures

### If CI/CD Breaks:
1. Check GitHub Actions logs
2. Verify secrets are still valid
3. Test locally: `npm run compile && npm run package`
4. Create issue with CI/CD template

### If Marketplace Publishing Fails:
1. Check Azure DevOps PAT expiration
2. Verify publisher permissions
3. Manual publish: `npm run publish`

### If Security Alert:
1. Review vulnerability details
2. Update dependencies: `npm audit fix`
3. Test: `npm run compile`
4. Create patch release

---

## 📞 Support

- **Documentation**: `setup-cicd.md`
- **Validation**: `npm run validate-cicd`
- **Issues**: Use CI/CD issue template
- **Logs**: GitHub Actions tab

---

*Keep this reference handy for quick CI/CD operations! 🎉*