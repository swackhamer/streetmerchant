#!/usr/bin/env node

/**
 * Apply Store Refactoring Script
 * This script applies the refactored store implementations to the codebase
 * after they have been reviewed.
 */
const fs = require('fs');
const path = require('path');
const util = require('util');
const execSync = require('child_process').execSync;

// Promisify fs functions
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const readdir = util.promisify(fs.readdir);
const copyFile = util.promisify(fs.copyFile);
const unlink = util.promisify(fs.unlink);

// Constants
const BASE_DIR = path.resolve(__dirname, '..');
const STORE_DIR = path.join(BASE_DIR, 'src', 'store', 'model');
const REFACTORED_DIR = path.join(STORE_DIR, 'refactored');

/**
 * Updates the index.ts file to use the factory approach
 */
async function updateIndexFile() {
  const indexPath = path.join(STORE_DIR, 'index.ts');
  const content = await readFile(indexPath, 'utf8');
  
  // Add import for the common utilities
  let updatedContent = content.replace(
    '// Import core',
    '// Import core\nimport {initializeSeriesLinksLoader} from \'./auto-load-series\';\nimport {clearLinkCache} from \'./series-links\';\n'
  );
  
  // Update the store update function to clear the series links cache
  updatedContent = updatedContent.replace(
    'export function updateStores() {\n  stores.clear();',
    'export function updateStores() {\n  stores.clear();\n\n  // Clear the series links cache when updating stores\n  clearLinkCache();'
  );
  
  await writeFile(indexPath, updatedContent);
  console.log('Updated index.ts file');
}

/**
 * Apply the refactored store files
 */
async function applyRefactoring() {
  try {
    // Check if refactored directory exists
    if (!fs.existsSync(REFACTORED_DIR)) {
      console.error('Refactored directory not found. Run refactor-stores.js first.');
      process.exit(1);
    }
    
    // Get refactored store files
    const files = await readdir(REFACTORED_DIR);
    const storeFiles = files.filter(file => file.endsWith('.ts'));
    
    console.log(`Found ${storeFiles.length} refactored store files to apply`);
    
    // Backup original store files
    const backupDir = path.join(STORE_DIR, 'backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }
    
    // Apply refactored files
    for (const file of storeFiles) {
      const originalPath = path.join(STORE_DIR, file);
      const refactoredPath = path.join(REFACTORED_DIR, file);
      const backupPath = path.join(backupDir, file);
      
      if (fs.existsSync(originalPath)) {
        // Backup original file
        await copyFile(originalPath, backupPath);
        console.log(`Backed up ${file}`);
        
        // Replace with refactored file
        await copyFile(refactoredPath, originalPath);
        console.log(`Applied ${file}`);
      } else {
        console.warn(`Original file not found for ${file}`);
      }
    }
    
    // Update the index.ts file
    await updateIndexFile();
    
    console.log('\nRefactoring applied successfully!');
    console.log(`Original files were backed up to ${backupDir}`);
    console.log('\nNext steps:');
    console.log('1. Run tests to verify the refactoring: pnpm test');
    console.log('2. If successful, commit the changes');
    console.log('3. If there are issues, revert using the backup files');
    
  } catch (err) {
    console.error('Error applying refactoring:', err);
  }
}

// Execute the apply process
applyRefactoring();