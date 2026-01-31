# Fix Marketplace Publishing Issues

## Current Status
- ✅ Version bump workflow works (creates releases v0.2.2, v0.2.3, v0.2.4, v0.2.5)
- ✅ CI/CD Pipeline version check fixed for manual triggers
- ❌ VSCE token authentication failing with "TF400813: The user is not authorized"
- ❌ Extension stuck at v0.2.0 on marketplace (should be v0.2.5)

## Root Cause
Your VSCE_PAT token has expired or lost permissions. The error "TF400813: The user is not authorized" indicates the token can't access the Visual Studio Marketplace.

## Solution Steps

### Step 1: Create New Azure DevOps PAT
1. Go to https://dev.azure.com/
2. Sign in with your Microsoft account (same one used for VS Code Marketplace)
3. Click your profile picture → "Personal access tokens"
4. Click "New Token"
5. Configure the token:
   - **Name**: `VSCE Marketplace Publishing`
   - **Organization**: Select your organization or "All accessible organizations"
   - **Expiration**: 1 year (or custom)
   - **Scopes**: Click "Show all scopes" and select:
     - ✅ **Marketplace** → **Manage** (CRITICAL - this is the key permission)
     - ✅ **Marketplace** → **Acquire** (optional, for future use)
     - ✅ **Marketplace** → **Publish** (optional, for future use)

### Step 2: Update GitHub Secret
1. Go to your GitHub repository: https://github.com/VishalRaut2106/vscode-toon
2. Go to Settings → Secrets and variables → Actions
3. Find `VSCE_PAT` secret and click "Update"
4. Paste your new Azure DevOps PAT token
5. Click "Update secret"

### Step 3: Test the Fix
Run the "Publish to Marketplace" workflow:
1. Go to Actions tab in your GitHub repo
2. Click "Publish to Marketplace" workflow
3. Click "Run workflow" button
4. Leave version empty (will use current v0.2.5)
5. Click "Run workflow"

### Step 4: Verify Success
After successful run:
1. Check https://marketplace.visualstudio.com/items?itemName=vishalraut.vscode-toon
2. Version should update from 0.2.0 to 0.2.5
3. Install count and ratings should be preserved

## Alternative: Use CI/CD Pipeline
Once token is fixed, you can also trigger the main CI/CD pipeline:
1. Go to Actions → "CI/CD Pipeline"
2. Click "Run workflow"
3. This will run the full pipeline including marketplace publishing

## Token Permissions Explained
- **Marketplace → Manage**: Required to publish/update extensions
- **Marketplace → Acquire**: Allows acquiring extensions (optional)
- **Marketplace → Publish**: Additional publishing permissions (optional)

## Security Best Practices
- Set token expiration to 1 year maximum
- Use minimal required scopes
- Regularly rotate tokens
- Monitor token usage in Azure DevOps

## Troubleshooting
If you still get authentication errors:
1. Verify you're signed into the correct Microsoft account
2. Check if your publisher account `vishalraut` is still active
3. Ensure the Azure DevOps organization has access to Visual Studio Marketplace
4. Try creating the token from https://marketplace.visualstudio.com/manage/publishers/vishalraut

## Next Steps After Fix
1. Extension will be published as v0.2.5
2. Future releases will work automatically via version-bump workflow
3. CI/CD pipeline will handle all publishing
4. Consider setting up Open VSX Registry token (OVSX_PAT) for broader distribution