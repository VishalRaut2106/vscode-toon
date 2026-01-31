---
name: CI/CD Issue
about: Report problems with the CI/CD pipeline
title: '[CI/CD] '
labels: 'ci/cd, bug'
assignees: ''

---

## 🚨 CI/CD Issue Report

### 📋 Issue Description
<!-- Describe the CI/CD problem you're experiencing -->

### 🔧 Workflow Information
- **Workflow Name**: <!-- e.g., CI/CD Pipeline, Version Bump, Security Monitor -->
- **Run ID**: <!-- GitHub Actions run ID if available -->
- **Branch**: <!-- Which branch triggered the workflow -->
- **Trigger**: <!-- Push, PR, Release, Manual, etc. -->

### 📊 Error Details
<!-- Paste the error message or logs here -->
```
[Paste error logs here]
```

### 🔍 Steps to Reproduce
1. 
2. 
3. 

### 💻 Environment
- **Repository**: <!-- Your repository URL -->
- **Node.js Version**: <!-- If known -->
- **VSCE Version**: <!-- If known -->

### 🔐 Security Check
- [ ] I have verified this is the official TOON extension repository
- [ ] I have not included any secrets or tokens in this issue

### 📋 Checklist
- [ ] I have checked the workflow logs in GitHub Actions
- [ ] I have reviewed the setup-cicd.md documentation
- [ ] I have verified my GitHub secrets are configured correctly
- [ ] I have run `npm run validate-cicd` locally

### 🎯 Expected Behavior
<!-- What should have happened -->

### 🐛 Actual Behavior
<!-- What actually happened -->

### 📎 Additional Context
<!-- Any other information that might be helpful -->

---

### 🚀 For Maintainers
- [ ] Workflow logs reviewed
- [ ] Issue reproduced
- [ ] Fix implemented
- [ ] Documentation updated if needed