/**
 * Test script to parse a single store file to understand the format
 */
const fs = require('fs');
const path = require('path');

// Take the file path from command line
const args = process.argv.slice(2);
const filePath = args[0];

if (!filePath) {
  console.error('Please provide a file path to parse');
  process.exit(1);
}

// Read the file
const fileContent = fs.readFileSync(filePath, 'utf8');

console.log(`Parsing file: ${filePath}`);
console.log('File content:');
console.log('---');
console.log(fileContent);
console.log('---\n');

// Extract links array
const linksMatch = fileContent.match(/export\s+const\s+links[^=]*=\s*\[([\s\S]*?)\];/);

if (!linksMatch) {
  console.error('No links array found in the file');
  process.exit(1);
}

const linksContent = linksMatch[1];
console.log('Links content:');
console.log('---');
console.log(linksContent);
console.log('---\n');

// Process createLink calls
const directLinkMatches = [...linksContent.matchAll(/createLink\(\s*{([^}]*)}\s*\)/g)];
console.log(`Found ${directLinkMatches.length} direct createLink calls`);

for (const [i, match] of directLinkMatches.entries()) {
  console.log(`\nDirect link #${i + 1}:`);
  console.log(match[0]);
  
  const linkText = match[1];
  
  // Extract properties
  const brandMatch = linkText.match(/brand:\s*['"]([^'"]+)['"]/);
  const modelMatch = linkText.match(/model:\s*['"]([^'"]+)['"]/);
  const seriesMatch = linkText.match(/series:\s*['"]([^'"]+)['"]/);
  const urlMatch = linkText.match(/url:\s*['"]([^'"]+)['"]/);
  
  console.log({
    brand: brandMatch ? brandMatch[1] : undefined,
    model: modelMatch ? modelMatch[1] : undefined,
    series: seriesMatch ? seriesMatch[1] : undefined,
    url: urlMatch ? urlMatch[1] : undefined,
  });
}

// Process spread operator invocations
const factoryMatches = [...linksContent.matchAll(/\.\.\.create(\w+)Links\(([^)]*)\)/g)];
console.log(`\nFound ${factoryMatches.length} factory method calls`);

for (const [i, match] of factoryMatches.entries()) {
  console.log(`\nFactory call #${i + 1}:`);
  console.log(match[0]);
  
  const factoryType = match[1]; // e.g., "BrandSeries", "FoundersEdition"
  const args = match[2];        // Arguments to the factory function
  
  console.log(`Factory type: ${factoryType}`);
  console.log(`Arguments: ${args}`);
  
  // For simplicity, let's just find all string literals
  const stringLiterals = [...args.matchAll(/['"]([^'"]+)['"]/g)].map(m => m[1]);
  console.log('String literals in arguments:', stringLiterals);
  
  // For array arguments, find the array content
  const arrayContent = args.match(/\[([\s\S]*?)\]/);
  if (arrayContent) {
    console.log('Array content:');
    console.log(arrayContent[1]);
  }
}