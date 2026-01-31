#!/usr/bin/env node

/**
 * TOON Extension Verification Script
 * 
 * This script helps users verify they have the official TOON extension installed.
 * Run with: node verify-official.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔐 TOON Extension Verification Tool\n');

// Check if this is the official extension
function verifyOfficial() {
    try {
        const packagePath = path.join(__dirname, 'package.json');
        const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        console.log('📦 Extension Information:');
        console.log(`   Name: ${packageData.name}`);
        console.log(`   Display Name: ${packageData.displayName}`);
        console.log(`   Publisher: ${packageData.publisher}`);
        console.log(`   Version: ${packageData.version}`);
        console.log(`   Repository: ${packageData.repository?.url || 'Not specified'}\n`);
        
        // Verify official markers
        const isOfficial = 
            packageData.publisher === 'vishalraut' &&
            packageData.name === 'vscode-toon' &&
            packageData.repository?.url?.includes('vishalraut2106/vscode-toon') &&
            packageData.dependencies?.['@toon-format/toon'];
            
        if (isOfficial) {
            console.log('✅ VERIFICATION PASSED');
            console.log('🎉 This is the OFFICIAL TOON extension!');
            console.log('👨‍💻 Maintained by Vishal Raut (TOON Organization Member)');
            console.log('🔗 Official Repository: https://github.com/vishalraut2106/vscode-toon');
            console.log('🏢 TOON Organization: https://github.com/toon-format');
        } else {
            console.log('❌ VERIFICATION FAILED');
            console.log('⚠️  This does NOT appear to be the official TOON extension!');
            console.log('🚨 You may have installed a fake extension.');
            console.log('\n📋 Official Extension Details:');
            console.log('   Publisher: vishalraut');
            console.log('   Extension ID: vishalraut.vscode-toon');
            console.log('   Repository: https://github.com/vishalraut2106/vscode-toon');
        }
        
    } catch (error) {
        console.log('❌ Error reading package.json');
        console.log('This script must be run from the extension directory.');
    }
}

console.log('🔍 Checking extension authenticity...\n');
verifyOfficial();

console.log('\n📞 Report Issues:');
console.log('   GitHub: https://github.com/vishalraut2106/vscode-toon/issues');
console.log('   TOON Org: https://github.com/toon-format');