const fs = require('fs');
const path = require('path');

// Read the current registry file
const registryPath = path.join(__dirname, 'src/store/model/store-registry.ts');
const registryContent = fs.readFileSync(registryPath, 'utf8');

// Extract the header (import statements, interfaces, etc.)
const headerMatch = registryContent.match(/^([\s\S]+?)export const storeRegistry/m);
const header = headerMatch ? headerMatch[1] : '';

// Extract all store entries from the registry object
const storeRegex = /'([^']+)':\s*{([\s\S]+?)},\s*'([^']+)':/g;
const storeEntries = [];
let lastStoreName = '';
let match;

// Extract entries with regex
const entryRegex = /'([^']+)':\s*{([\s\S]+?)(\n\s{2,}'})/g;
let storeSection = registryContent.split('export const storeRegistry')[1];
storeSection = storeSection.substring(0, storeSection.indexOf('export function'));

// Clean up the store section to make it proper JSON-like
storeSection = 'export const storeRegistry: Record<string, ExtendedStoreOptions> = {' + 
               storeSection.replace(/,(\s*\n\s*)}(;?)$/, '$1}$2');

// Extract the store helper functions
const helperFunctions = registryContent.substring(
  registryContent.indexOf('export function createStoreFromRegistry'),
  registryContent.length
).match(/export function createStoreFromRegistry[\s\S]+?}\s*$/)[0];

// Create the fixed file content
const fixedContent = `${header}export const storeRegistry: Record<string, ExtendedStoreOptions> = ${storeSection}

// Helper functions to work with the registry
${helperFunctions}`;

// Write the fixed file
fs.writeFileSync(path.join(__dirname, 'fixed-registry.ts'), fixedContent);
console.log('Fixed registry file created at fixed-registry.ts');