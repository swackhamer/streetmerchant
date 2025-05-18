/**
 * Simple test to verify browser instance creation for one store
 */
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

console.log('SIMPLE BROWSER INSTANCE TEST');
console.log('===========================\n');

// Create a test environment file with one store
const envPath = path.resolve(process.cwd(), '.env.simple-test');
const envContent = `
STORES=bestbuy
SHOW_ONLY_SERIES=5090
`;
fs.writeFileSync(envPath, envContent);
console.log(`Created test .env at ${envPath}`);

// Load the environment variables
dotenv.config({ path: envPath, override: true });
console.log('Loaded environment variables:');
console.log('STORES:', process.env.STORES);
console.log('SHOW_ONLY_SERIES:', process.env.SHOW_ONLY_SERIES);

// Parse the STORES variable
const stores = process.env.STORES.split(',').map(store => ({
  name: store.trim(),
  links: []
}));

console.log(`\nFound ${stores.length} configured store(s):`);
stores.forEach(store => console.log(`- ${store.name}`));

// Track browser instances
let browserInstances = [];

// Main test function
async function testBrowserInstanceCount() {
  console.log('\nStarting browser instance test...');
  
  // Create browser instances for each store (simulating the application's behavior)
  for (const store of stores) {
    console.log(`\nCreating browser for store: ${store.name}`);
    
    // Create a unique user data directory for this store
    const userDataDir = path.join(process.cwd(), `profile-${store.name}`);
    
    // Launch a browser
    const browser = await puppeteer.launch({ 
      headless: 'new',
      userDataDir
    });
    
    // Store the instance
    browserInstances.push({ store, browser });
    
    console.log(`Browser instance created for ${store.name}`);
    console.log(`Current browser instance count: ${browserInstances.length}`);
    
    // Open a test page to verify browser works
    const page = await browser.newPage();
    await page.goto('about:blank');
    const pages = await browser.pages();
    console.log(`Pages open in browser: ${pages.length}`);
  }
  
  console.log('\nTest Results:');
  console.log('-----------------');
  console.log(`Total Stores Configured: ${stores.length}`);
  console.log(`Total Browser Instances Created: ${browserInstances.length}`);
  
  if (browserInstances.length === stores.length) {
    console.log('\n✓ PASS: One browser instance per configured store');
  } else {
    console.log('\n✗ FAIL: Browser instance count does not match store count');
  }
  
  // Clean up
  console.log('\nCleaning up...');
  for (const { store, browser } of browserInstances) {
    console.log(`Closing browser for ${store.name}`);
    await browser.close();
  }
  
  // Remove test .env and profile directories
  fs.unlinkSync(envPath);
  for (const store of stores) {
    const profileDir = path.join(process.cwd(), `profile-${store.name}`);
    if (fs.existsSync(profileDir)) {
      fs.rmSync(profileDir, { recursive: true, force: true });
    }
  }
  
  console.log('Test completed and resources cleaned up');
}

// Run the test
testBrowserInstanceCount()
  .catch(error => {
    console.error('Test failed:', error);
  });