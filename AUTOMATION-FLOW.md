# CI/CD Automation

Complete automation setup for the TOON VS Code extension.

## Overview

Fully automated release pipeline with one-click publishing to VS Code Marketplace.

## Workflows

### 1. Version Bump & Release (`version-bump.yml`)
**Trigger**: Manual workflow dispatch
**Purpose**: Create new releases

**Process**:
1. Bump version in package.json (patch/minor/major)
2. Update CHANGELOG.md
3. Commit changes to main branch
4. Create GitHub release with tag
5. Automatically trigger CI/CD pipeline

### 2. CI/CD Pipeline (`ci-cd.yml`)
**Trigger**: GitHub releases (automatic)
**Purpose**: Build and publish extension

**Jobs**:
- **build-and-test**: Compile, lint, test, package
- **publish-to-marketplace**: Publish to VS Code Marketplace

### 3. Security Monitor (`security-monitor.yml`)
**Trigger**: Weekly schedule + package.json changes
**Purpose**: Monitor dependencies for vulnerabilities

## Usage

### Release New Version
1. Go to **GitHub Actions** → **"Version Bump and Release"**
2. Click **"Run workflow"**
3. Select version type: `patch` | `minor` | `major`
4. Click **"Run workflow"**

**Result**: Complete automation from version bump to marketplace publication.

## Configuration

### Required Secrets
- `VSCE_PAT` - VS Code Marketplace Personal Access Token
- `WORKFLOW_PAT` - GitHub Personal Access Token for workflow triggering
- `OVSX_PAT` - Open VSX Registry token (optional)

### Workflow Features
- **Automatic triggering** between workflows
- **Version validation** ensures consistency
- **Artifact generation** with VSIX files
- **Release attachment** of built extensions
- **Error handling** with detailed logging

## Benefits

- **One-click releases** - Single manual trigger
- **Zero manual work** - Complete automation
- **Consistent process** - Same steps every time
- **Audit trail** - Full history in GitHub Actions
- **Fast deployment** - 2-3 minutes from trigger to marketplace