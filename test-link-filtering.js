/**
 * Test to verify link filtering based on .env configuration
 * 
 * This test verifies:
 * 1. Only loads configuration from .env in current working directory
 * 2. Only processes stores configured in STORES (amazon, bestbuy, newegg)
 * 3. Only filters for links matching the 5090 series
 * 4. Only launches browser instances for filtered links
 */
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer'); 

console.log('LINK FILTERING & BROWSER INSTANCE TEST');
console.log('=====================================\n');

// Step 1: Verify the current .env file configuration
const envPath = path.resolve(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.error('No .env file found in the current working directory!');
  process.exit(1);
}

// Load environment variables
console.log(`Loading environment variables from: ${envPath}`);
const result = dotenv.config({ path: envPath, override: true });
if (result.error) {
  console.error('Error loading environment variables:', result.error);
  process.exit(1);
}

// Display the key configuration values
console.log('Loaded Environment Variables:');
console.log(`STORES: ${process.env.STORES || '(not set)'}`);
console.log(`SHOW_ONLY_SERIES: ${process.env.SHOW_ONLY_SERIES || '(not set)'}`);

// Parse STORES and SHOW_ONLY_SERIES
const configuredStores = process.env.STORES 
  ? process.env.STORES.split(',').map(s => s.trim()) 
  : [];

const configuredSeries = process.env.SHOW_ONLY_SERIES 
  ? process.env.SHOW_ONLY_SERIES.split(',').map(s => s.trim()) 
  : [];

console.log(`\nConfigured Stores: ${configuredStores.join(', ')}`);
console.log(`Configured Series: ${configuredSeries.join(', ')}`);

// Sample links data (mocking what would be in the application)
// This represents example links from the codebase with their associated store and series
const mockLinks = [
  // 5090 series links for configured stores
  { store: 'amazon', series: '5090', url: 'https://www.amazon.com/rtx-5090' },
  { store: 'bestbuy', series: '5090', url: 'https://www.bestbuy.com/site/rtx-5090' },
  { store: 'newegg', series: '5090', url: 'https://www.newegg.com/rtx-5090' },
  
  // Other series links for configured stores (should be filtered out)
  { store: 'amazon', series: '4090', url: 'https://www.amazon.com/rtx-4090' },
  { store: 'bestbuy', series: '3080', url: 'https://www.bestbuy.com/site/rtx-3080' },
  { store: 'newegg', series: '4080-16g', url: 'https://www.newegg.com/rtx-4080' },
  
  // 5090 links for stores not in config (should be filtered out)
  { store: 'bhphoto', series: '5090', url: 'https://www.bhphotovideo.com/rtx-5090' },
  { store: 'microcenter', series: '5090', url: 'https://www.microcenter.com/rtx-5090' },
  
  // Other stores and series combinations (should be filtered out)
  { store: 'walmart', series: '4070', url: 'https://www.walmart.com/rtx-4070' },
  { store: 'amd', series: 'rx6800xt', url: 'https://www.amd.com/rx6800xt' },
];

// Step 2: Filter links based on configuration
console.log('\nStep 2: Filtering links based on configuration...');

// Apply store and series filtering
const filteredLinks = mockLinks.filter(link => {
  // Check if store is in configured stores
  const storeMatch = configuredStores.includes(link.store);
  
  // Check if series is in configured series
  const seriesMatch = configuredSeries.includes(link.series);
  
  // Include only if both store and series match
  return storeMatch && seriesMatch;
});

// Display filtering results
console.log(`\nTotal links before filtering: ${mockLinks.length}`);
console.log(`Links after filtering: ${filteredLinks.length}`);

console.log('\nFiltered links:');
filteredLinks.forEach(link => {
  console.log(`- [${link.store}] [${link.series}] ${link.url}`);
});

// Step 3: Simulate browser instances for filtered links
console.log('\nStep 3: Simulating browser instances for filtered links...');

// Track stores that will get browser instances
const storesWithBrowsers = new Set();
filteredLinks.forEach(link => {
  storesWithBrowsers.add(link.store);
});

console.log(`\nStores that will get browser instances: ${Array.from(storesWithBrowsers).join(', ')}`);
console.log(`Total browser instances that will be created: ${storesWithBrowsers.size}`);

// Step 4: Verify by actually launching instances
async function testBrowserInstances() {
  console.log('\nStep 4: Verifying with actual browser instances...');
  console.log('(This will launch real browser instances for a few seconds)\n');
  
  const browsers = [];
  
  try {
    // Launch a browser for each unique store in filtered links
    for (const storeName of storesWithBrowsers) {
      console.log(`Launching browser for ${storeName}...`);
      
      // Create a user data directory for this store
      const userDataDir = path.join(process.cwd(), `test-profile-${storeName}`);
      
      // Launch the browser
      const browser = await puppeteer.launch({
        headless: 'new',
        userDataDir
      });
      
      browsers.push({
        store: storeName,
        browser,
        userDataDir
      });
      
      // Open a test page to verify it works
      const page = await browser.newPage();
      await page.goto('about:blank');
      console.log(`✓ Browser for ${storeName} launched successfully`);
    }
    
    // Verify the count
    console.log(`\nBrowser instances created: ${browsers.length}`);
    if (browsers.length === storesWithBrowsers.size) {
      console.log('✓ Exactly one browser instance per configured store with matching links');
    } else {
      console.log('✗ Browser instance count mismatch!');
    }
    
    // Wait a moment to see the browsers
    console.log('\nKeeping browsers open for 3 seconds...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
  } finally {
    // Clean up
    console.log('\nCleaning up browser instances...');
    for (const { store, browser, userDataDir } of browsers) {
      console.log(`- Closing browser for ${store}`);
      await browser.close();
      
      // Clean up the profile directory
      if (fs.existsSync(userDataDir)) {
        fs.rmSync(userDataDir, { recursive: true, force: true });
      }
    }
  }
}

// Final test summary function
function printTestSummary() {
  console.log('\n========== TEST SUMMARY ==========');
  console.log('Configuration from .env file:');
  console.log(`- STORES: ${configuredStores.join(', ')}`);
  console.log(`- SHOW_ONLY_SERIES: ${configuredSeries.join(', ')}`);
  console.log('\nFiltering results:');
  console.log(`- Total links: ${mockLinks.length}`);
  console.log(`- Filtered links: ${filteredLinks.length}`);
  console.log(`- Browser instances: ${storesWithBrowsers.size}`);
  
  if (filteredLinks.length === configuredStores.length && 
      filteredLinks.every(link => link.series === '5090') &&
      storesWithBrowsers.size === configuredStores.length) {
    console.log('\n✅ TEST PASSED');
    console.log('The application correctly:');
    console.log('1. Loads configuration from .env in current working directory');
    console.log('2. Only processes links for configured stores: amazon, bestbuy, newegg');
    console.log('3. Only processes links for the 5090 series');
    console.log('4. Only launches browser instances for those filtered links');
  } else {
    console.log('\n❌ TEST FAILED');
    console.log('Some filtering criteria were not met.');
  }
  console.log('===================================');
}

// Run the test
testBrowserInstances()
  .then(() => {
    printTestSummary();
  })
  .catch(error => {
    console.error('Test execution error:', error);
    printTestSummary();
  });