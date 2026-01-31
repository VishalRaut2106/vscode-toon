# Azure DevOps PAT Permissions Guide

## Current Required Permissions
For VS Code Marketplace publishing, you need:

### ✅ Essential (Required Now)
- **Marketplace → Manage**: Publish and update extensions
- **Marketplace → Acquire**: Download and install extensions  
- **Marketplace → Publish**: Additional publishing capabilities

## 🚀 Future Expansion Permissions
If you plan to expand your development workflow, consider these:

### Code & Repository Management
- **Code (read)**: Access repositories
- **Code (write)**: Push code changes
- **Pull Request (read & write)**: Manage pull requests

### Build & Release
- **Build (read & execute)**: Run build pipelines
- **Release (read, write & execute)**: Manage release pipelines
- **Variable Groups (read & manage)**: Handle pipeline variables

### Project Management
- **Work Items (read & write)**: Manage issues and tasks
- **Analytics (read)**: Access project analytics
- **Project and Team (read)**: View project information

### Package Management
- **Packaging (read & write)**: Manage npm/NuGet packages
- **Symbols (read & write)**: Debug symbol management

### Testing & Quality
- **Test Management (read & write)**: Manage test plans
- **Load Test (read & write)**: Performance testing

## 🎯 Recommended Minimal Set for Extension Development
```
✅ Marketplace → Manage     (Required)
✅ Marketplace → Acquire    (Recommended)
✅ Marketplace → Publish    (Recommended)
✅ Code (read)             (If using Azure Repos)
✅ Build (read & execute)   (If using Azure Pipelines)
```

## 🔒 Security Best Practices
1. **Principle of Least Privilege**: Only select permissions you actually need
2. **Regular Rotation**: Update tokens every 6-12 months
3. **Scope Limitation**: Use organization-specific tokens when possible
4. **Monitor Usage**: Check token activity regularly
5. **Immediate Revocation**: Revoke compromised tokens immediately

## 📝 Token Naming Convention
Use descriptive names:
- ✅ `VSCE-Marketplace-Publishing-2024`
- ✅ `GitHub-Actions-Marketplace-Token`
- ❌ `Token1`
- ❌ `MyToken`

## 🔄 Token Lifecycle Management
1. **Creation**: Document purpose and permissions
2. **Usage**: Monitor in Azure DevOps activity logs
3. **Renewal**: Set calendar reminders before expiration
4. **Rotation**: Update GitHub secrets when rotating
5. **Revocation**: Remove from all systems when no longer needed

## 🚨 Emergency Procedures
If token is compromised:
1. Immediately revoke in Azure DevOps
2. Update GitHub secrets with new token
3. Check recent activity logs
4. Notify team if applicable
5. Review security practices