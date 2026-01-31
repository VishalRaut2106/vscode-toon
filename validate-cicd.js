#!/usr/bin/env node

/**
 * CI/CD Setup Validation Script
 * 
 * This script validates your CI/CD setup for the TOON extension.
 * Run with: node validate-cicd.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 TOON Extension CI/CD Validation\n');

const checks = [];

// Check 1: Workflow files exist
function checkWorkflowFiles() {
    const workflowDir = '.github/workflows';
    const requiredFiles = [
        'ci-cd.yml',
        'version-bump.yml',
        'security-monitor.yml'
    ];
    
    console.log('📁 Checking workflow files...');
    
    if (!fs.existsSync(workflowDir)) {
        checks.push({ name: 'Workflow Directory', status: '❌', message: '.github/workflows directory not found' });
        return;
    }
    
    requiredFiles.forEach(file => {
        const filePath = path.join(workflowDir, file);
        if (fs.existsSync(filePath)) {
            checks.push({ name: `Workflow: ${file}`, status: '✅', message: 'Found' });
        } else {
            checks.push({ name: `Workflow: ${file}`, status: '❌', message: 'Missing' });
        }
    });
}

// Check 2: Package.json configuration
function checkPackageJson() {
    console.log('📦 Checking package.json...');
    
    try {
        const packagePath = path.join(__dirname, 'package.json');
        const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        // Check required fields
        const requiredFields = [
            'name',
            'version',
            'publisher',
            'repository'
        ];
        
        requiredFields.forEach(field => {
            if (packageData[field]) {
                checks.push({ name: `Package: ${field}`, status: '✅', message: packageData[field] });
            } else {
                checks.push({ name: `Package: ${field}`, status: '❌', message: 'Missing' });
            }
        });
        
        // Check scripts
        const requiredScripts = ['compile', 'lint', 'package'];
        requiredScripts.forEach(script => {
            if (packageData.scripts && packageData.scripts[script]) {
                checks.push({ name: `Script: ${script}`, status: '✅', message: 'Defined' });
            } else {
                checks.push({ name: `Script: ${script}`, status: '❌', message: 'Missing' });
            }
        });
        
        // Check official markers
        if (packageData.publisher === 'vishalraut') {
            checks.push({ name: 'Official Publisher', status: '✅', message: 'vishalraut' });
        } else {
            checks.push({ name: 'Official Publisher', status: '❌', message: 'Not vishalraut' });
        }
        
    } catch (error) {
        checks.push({ name: 'Package.json', status: '❌', message: 'Cannot read package.json' });
    }
}

// Check 3: Required files
function checkRequiredFiles() {
    console.log('📄 Checking required files...');
    
    const requiredFiles = [
        'README.md',
        'CHANGELOG.md',
        'LICENSE',
        'tsconfig.json',
        'OFFICIAL-VERIFICATION.md'
    ];
    
    requiredFiles.forEach(file => {
        if (fs.existsSync(file)) {
            checks.push({ name: `File: ${file}`, status: '✅', message: 'Found' });
        } else {
            checks.push({ name: `File: ${file}`, status: '❌', message: 'Missing' });
        }
    });
}

// Check 4: Git configuration
function checkGitConfig() {
    console.log('🔧 Checking Git configuration...');
    
    if (fs.existsSync('.git')) {
        checks.push({ name: 'Git Repository', status: '✅', message: 'Initialized' });
    } else {
        checks.push({ name: 'Git Repository', status: '❌', message: 'Not initialized' });
    }
    
    if (fs.existsSync('.gitignore')) {
        checks.push({ name: 'Git Ignore', status: '✅', message: 'Found' });
    } else {
        checks.push({ name: 'Git Ignore', status: '⚠️', message: 'Missing (recommended)' });
    }
}

// Check 5: Security files
function checkSecurityFiles() {
    console.log('🔐 Checking security files...');
    
    const securityFiles = [
        'OFFICIAL-VERIFICATION.md',
        'verify-official.js',
        'SECURITY-UPDATE-SUMMARY.md'
    ];
    
    securityFiles.forEach(file => {
        if (fs.existsSync(file)) {
            checks.push({ name: `Security: ${file}`, status: '✅', message: 'Found' });
        } else {
            checks.push({ name: `Security: ${file}`, status: '❌', message: 'Missing' });
        }
    });
}

// Run all checks
function runValidation() {
    checkWorkflowFiles();
    checkPackageJson();
    checkRequiredFiles();
    checkGitConfig();
    checkSecurityFiles();
    
    console.log('\n📊 Validation Results:\n');
    
    // Display results
    checks.forEach(check => {
        console.log(`${check.status} ${check.name}: ${check.message}`);
    });
    
    // Summary
    const passed = checks.filter(c => c.status === '✅').length;
    const failed = checks.filter(c => c.status === '❌').length;
    const warnings = checks.filter(c => c.status === '⚠️').length;
    
    console.log('\n📈 Summary:');
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⚠️ Warnings: ${warnings}`);
    console.log(`📊 Total: ${checks.length}`);
    
    if (failed === 0) {
        console.log('\n🎉 CI/CD setup looks good! Ready for deployment.');
        console.log('\n📋 Next steps:');
        console.log('1. Set up GitHub secrets (VSCE_PAT)');
        console.log('2. Push to GitHub to trigger workflows');
        console.log('3. Create a release to publish to marketplace');
    } else {
        console.log('\n⚠️ Please fix the failed checks before proceeding.');
        console.log('\n📖 See setup-cicd.md for detailed instructions.');
    }
}

// Run validation
runValidation();