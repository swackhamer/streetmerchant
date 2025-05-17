/**
 * Link Extraction Script
 * This script extracts links from store files and organizes them by series
 */
const fs = require('fs');
const path = require('path');
const util = require('util');
// const execSync = require('child_process').execSync;

// Promisify fs functions
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);
const readdir = util.promisify(fs.readdir);

// Constants
const BASE_DIR = path.resolve(__dirname, '..');
const STORE_DIR = path.join(BASE_DIR, 'src', 'store', 'model');
// const SERIES_DIR = path.join(STORE_DIR, 'series');
const OUTPUT_DIR = path.join(
  BASE_DIR,
  'src',
  'store',
  'model',
  'extracted-links'
);

// Shared state
const storeFiles = [];
// const linksByStore = new Map();

/**
 * Creates a directory if it doesn't exist
 */
async function ensureDir(dir) {
  try {
    await mkdir(dir, {recursive: true});
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}

/**
 * Logs the progress
 */
function logProgress(message) {
  console.log(message);
}

/**
 * Reads and parses a TypeScript file to find all links
 */
async function extractLinks(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const storeName = path.basename(filePath, '.ts');

    // Skip non-store files
    if (
      storeName === 'store' ||
      storeName === 'index' ||
      storeName.includes('test') ||
      filePath.includes('templates') ||
      filePath.includes('common') ||
      filePath.includes('examples') ||
      filePath.includes('helpers') ||
      filePath.includes('auto-load-series') ||
      filePath.includes('link-validator') ||
      filePath.includes('series-links') ||
      filePath.includes('sample-store-series') ||
      filePath.includes('store-mapper') ||
      filePath.includes('extended-store')
    ) {
      return null;
    }

    // Extract the links section
    const linksMatch = content.match(/links:\s*\[([\s\S]*?)\],/);
    if (!linksMatch) {
      return {
        name: storeName,
        links: [],
      };
    }

    const linksSection = linksMatch[1];

    // Raw extraction to file
    await ensureDir(OUTPUT_DIR);
    await writeFile(
      path.join(OUTPUT_DIR, `${storeName}-links.txt`),
      linksSection
    );

    // Simple count of link objects
    const linkCount = (linksSection.match(/{\s*brand:/g) || []).length;

    return {
      name: storeName,
      linkCount,
    };
  } catch (error) {
    console.error(`Error extracting links from ${filePath}:`, error);
    return null;
  }
}

/**
 * Main function to extract links from all store files
 */
async function extractAllLinks() {
  try {
    logProgress('Starting link extraction process...');

    // Ensure output directory exists
    await ensureDir(OUTPUT_DIR);

    // Scan for store files
    const files = await readdir(STORE_DIR);
    for (const file of files) {
      if (file.endsWith('.ts')) {
        storeFiles.push(path.join(STORE_DIR, file));
      }
    }

    logProgress(`Found ${storeFiles.length} store files to process`);

    // Process each store file
    const results = [];
    for (const file of storeFiles) {
      const result = await extractLinks(file);
      if (result) {
        results.push(result);
        logProgress(`Extracted ${result.linkCount} links from ${result.name}`);
      }
    }

    // Generate summary
    const totalLinks = results.reduce((sum, r) => sum + r.linkCount, 0);
    const storesWithLinks = results.filter(r => r.linkCount > 0).length;

    logProgress('\nLink extraction completed!');
    logProgress(`Processed ${results.length} valid store files`);
    logProgress(`Found ${storesWithLinks} stores with links`);
    logProgress(`Extracted approximately ${totalLinks} links in total`);
    logProgress(`Links sections saved to ${OUTPUT_DIR}`);
  } catch (err) {
    console.error('Error during extraction:', err);
  }
}

// Execute the extraction process
extractAllLinks();