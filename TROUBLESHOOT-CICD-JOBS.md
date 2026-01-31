# Troubleshoot CI/CD Job Issues

## 🔍 Current Problems Identified

### Problem 1: Jobs Skipping Automatically
**Issue**: When version-bump workflow creates a release, the CI/CD pipeline doesn't automatically publish to marketplace.

**Root Cause**: The `pre-release` job was only configured for `develop` branch, but you're working on `main` branch.

**✅ Fixed**: Updated condition to run on both `main` and `develop` branches.

### Problem 2: Manual Trigger Failures
**Issue**: When manually triggering CI/CD pipeline, `release-to-marketplace` job fails with exit code 1.

**Root Causes**:
1. **VSCE Token Issue**: Primary cause - expired/invalid VSCE_PAT token
2. **GitHub Release Upload**: Tries to upload to non-existent release when triggered manually

**✅ Fixed**: 
- Made GitHub release upload conditional (only for release events)
- Added better error handling for manual triggers

## 🚀 Solutions Implemented

### 1. Fixed CI/CD Pipeline
- ✅ Pre-release job now runs on `main` branch pushes
- ✅ Release job handles both automatic and manual triggers
- ✅ Better error handling and conditional steps

### 2. Created Simple Publish Workflow
- ✅ New `simple-publish.yml` workflow with minimal conditions
- ✅ Clear error messages for token issues
- ✅ Step-by-step validation and publishing

### 3. Enhanced Error Detection
- ✅ Better VSCE token validation
- ✅ Clear success/failure messages
- ✅ Artifact uploads with proper naming

## 🎯 Immediate Action Plan

### Step 1: Fix the Token (CRITICAL)
```bash
# The main issue is still the VSCE token
# You MUST create a new Azure DevOps PAT token
```

1. Go to https://dev.azure.com/
2. Create new PAT with "Marketplace → Manage" permissions
3. Update GitHub secret `VSCE_PAT`

### Step 2: Test with Simple Workflow
1. Go to Actions → "Simple Marketplace Publish"
2. Click "Run workflow"
3. This will give clear error messages if token is still invalid

### Step 3: Verify Automatic Flow
1. Run version-bump workflow to create v0.2.6
2. Check if CI/CD pipeline automatically triggers
3. Verify marketplace publishing works

## 🔧 Workflow Comparison

### Original CI/CD Pipeline
- ✅ Comprehensive testing and security checks
- ✅ Handles releases and manual triggers
- ❌ Complex conditions that can cause skipping
- ❌ Multiple failure points

### Simple Publish Workflow
- ✅ Minimal conditions, always runs when triggered
- ✅ Clear error messages for troubleshooting
- ✅ Step-by-step validation
- ❌ No comprehensive testing (use for emergency publishing)

### Publish to Marketplace Workflow
- ✅ Dedicated marketplace publishing
- ✅ Good for one-off publishing
- ✅ Reliable and tested
- ❌ Manual trigger only

## 🚨 Current Status Check

Run this to check your current status:

```bash
# Check if VSCE_PAT secret exists
# Go to: https://github.com/VishalRaut2106/vscode-toon/settings/secrets/actions

# Check current marketplace version
# Go to: https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon

# Check latest GitHub release
# Go to: https://github.com/VishalRaut2106/vscode-toon/releases
```

## 🎯 Expected Results After Token Fix

### Automatic Flow (Recommended)
1. Run version-bump workflow → Creates v0.2.6 release
2. CI/CD pipeline auto-triggers → Publishes to marketplace
3. Extension updates on marketplace within 5-10 minutes

### Manual Flow (Backup)
1. Run "Simple Marketplace Publish" workflow
2. Publishes current v0.2.5 to marketplace
3. No version bump needed

## 🔍 Debugging Commands

If you want to test locally:
```bash
# Test your token locally
npm install -g @vscode/vsce
echo "YOUR_TOKEN" | vsce login vishalraut
vsce ls-publishers

# Check current version
node -p "require('./package.json').version"

# Package extension
npm run package
ls *.vsix
```

## 📞 Next Steps

1. **Priority 1**: Create new Azure DevOps PAT token
2. **Priority 2**: Update GitHub secret VSCE_PAT  
3. **Priority 3**: Test with "Simple Marketplace Publish" workflow
4. **Priority 4**: Verify automatic flow with version-bump

The token is the main blocker - once that's fixed, everything should work smoothly!