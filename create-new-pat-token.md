# Create New Azure DevOps PAT Token - Quick Guide

## 🚀 Quick Steps

### 1. Go to Azure DevOps
Visit: https://dev.azure.com/

### 2. Access Personal Access Tokens
- Click your profile picture (top right)
- Select "Personal access tokens"

### 3. Create New Token
- Click "New Token"
- **Name**: `VSCE Marketplace Publishing`
- **Expiration**: 1 year
- **Scopes**: Click "Show all scopes"

### 4. Select Required Permissions
**CRITICAL**: You must select these scopes:

```
✅ Marketplace
  ✅ Manage    ← MOST IMPORTANT
  ✅ Acquire   ← Optional but recommended
  ✅ Publish   ← Optional but recommended
```

### 5. Create and Copy Token
- Click "Create"
- **IMPORTANT**: Copy the token immediately (you won't see it again)
- Token format: `52-character string`

### 6. Update GitHub Secret
1. Go to: https://github.com/VishalRaut2106/vscode-toon/settings/secrets/actions
2. Find `VSCE_PAT` secret
3. Click "Update"
4. Paste your new token
5. Click "Update secret"

### 7. Test Immediately
- Go to Actions → "Publish to Marketplace"
- Click "Run workflow"
- Leave version empty
- Click "Run workflow"

## ⚠️ Common Mistakes to Avoid
- ❌ Not selecting "Marketplace → Manage" scope
- ❌ Using wrong Microsoft account
- ❌ Token expiring too soon
- ❌ Not copying token before closing the page

## ✅ Success Indicators
- Token creation shows success message
- GitHub secret updates without error
- Workflow runs without authentication errors
- Extension publishes to marketplace

## 🔍 If Still Having Issues
1. Verify publisher account: https://marketplace.visualstudio.com/manage/publishers/vishalraut
2. Check Microsoft account permissions
3. Try creating token from marketplace directly
4. Contact me if authentication still fails