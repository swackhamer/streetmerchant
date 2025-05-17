/**
 * Script to extract product links from all series files and add them to centralized data store
 * 
 * This script:
 * 1. Finds all series-specific files in src/store/model/series directories
 * 2. Extracts product links from each file
 * 3. Adds the links to the centralized series-data.ts file
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Series data file path
const seriesDataFilePath = path.join(__dirname, 'src/store/model/series-data.ts');
let seriesDataContent = fs.readFileSync(seriesDataFilePath, 'utf8');

// Extract current data structure
const seriesDataMatch = seriesDataContent.match(/export const seriesData: SeriesData = \{([\s\S]+?)\};/);
if (!seriesDataMatch) {
  console.error('Could not find seriesData in series-data.ts');
  process.exit(1);
}

// Get all series directories
const seriesDir = path.join(__dirname, 'src/store/model/series');
const seriesDirs = fs.readdirSync(seriesDir).filter(file => 
  fs.statSync(path.join(seriesDir, file)).isDirectory()
);

// Process each series
let newSeriesEntries = {};
let totalLinks = 0;

seriesDirs.forEach(series => {
  console.log(`Processing series: ${series}`);
  const seriesPath = path.join(seriesDir, series);
  
  // Get all store files in this series
  const storeFiles = fs.readdirSync(seriesPath).filter(file => 
    file.endsWith('.ts') && !file.startsWith('index')
  );
  
  // Process each store file
  storeFiles.forEach(storeFile => {
    const storeName = path.basename(storeFile, '.ts');
    console.log(`  Processing store: ${storeName}`);
    
    try {
      // Read store file content
      const storeContent = fs.readFileSync(path.join(seriesPath, storeFile), 'utf8');
      
      // Extract links array
      const linksMatch = storeContent.match(/export const links = \[([\s\S]+?)\];/);
      if (!linksMatch) {
        console.log(`  No links found in ${series}/${storeName}`);
        return;
      }
      
      // Parse links
      let linksArray = [];
      try {
        // Create a temporary file with just the links array for safer evaluation
        const tempFile = path.join('/tmp', `links_${series}_${storeName}.js`);
        fs.writeFileSync(tempFile, `module.exports = [${linksMatch[1]}];`, 'utf8');
        
        // Use Node.js to parse the links
        try {
          linksArray = require(tempFile);
          // Delete the temp file
          fs.unlinkSync(tempFile);
        } catch (evalError) {
          console.error(`  Error parsing links from ${series}/${storeName}:`, evalError);
          return;
        }
      } catch (parseError) {
        console.error(`  Error parsing links from ${series}/${storeName}:`, parseError);
        return;
      }
      
      // Add links to series data
      if (linksArray.length > 0) {
        if (!newSeriesEntries[series]) {
          newSeriesEntries[series] = {};
        }
        if (!newSeriesEntries[series][storeName]) {
          newSeriesEntries[series][storeName] = [];
        }
        newSeriesEntries[series][storeName] = linksArray;
        console.log(`  Added ${linksArray.length} links from ${series}/${storeName}`);
        totalLinks += linksArray.length;
      }
    } catch (error) {
      console.error(`  Error processing ${series}/${storeName}:`, error);
    }
  });
});

// Build the new series data content
let newSeriesDataContent = 'export const seriesData: SeriesData = {\n';

// Add existing entries (avoiding duplicates)
for (const seriesName in newSeriesEntries) {
  newSeriesDataContent += `  // ${seriesName} Series\n`;
  newSeriesDataContent += `  '${seriesName}': {\n`;
  
  for (const storeName in newSeriesEntries[seriesName]) {
    if (newSeriesEntries[seriesName][storeName].length === 0) {
      continue;
    }
    
    newSeriesDataContent += `    '${storeName}': [\n`;
    
    newSeriesEntries[seriesName][storeName].forEach(link => {
      newSeriesDataContent += '      {\n';
      for (const key in link) {
        if (typeof link[key] === 'string') {
          newSeriesDataContent += `        ${key}: '${link[key]}',\n`;
        } else if (typeof link[key] === 'number') {
          newSeriesDataContent += `        ${key}: ${link[key]},\n`;
        }
      }
      newSeriesDataContent += '      },\n';
    });
    
    newSeriesDataContent += '    ],\n';
  }
  
  newSeriesDataContent += '  },\n';
}

newSeriesDataContent += '};';

// Replace the seriesData content in the file
const updatedContent = seriesDataContent.replace(
  /export const seriesData: SeriesData = \{[\s\S]+?\};/,
  newSeriesDataContent
);

// Write updated series data file (to a temporary location for safety)
const tempSeriesDataPath = path.join('/tmp', 'series-data.ts');
fs.writeFileSync(tempSeriesDataPath, updatedContent, 'utf8');
console.log(`Updated series data with ${totalLinks} links from ${Object.keys(newSeriesEntries).length} series to ${tempSeriesDataPath}`);

console.log('Extraction completed!');
console.log('IMPORTANT: Review the generated file at ' + tempSeriesDataPath + ' before replacing the original file');