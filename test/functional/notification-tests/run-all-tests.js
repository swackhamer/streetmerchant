#!/usr/bin/env node

/**
 * Run all notification tests in sequence
 */

const { spawn } = require('child_process');
const path = require('path');

const TESTS = [
  'simple-notify.js',
  'detailed-notify.js',
  'apple-notify.js' // This only runs on macOS
];

async function runTests() {
  console.log('=== Streetmerchant Notification Test Suite ===');
  console.log(`Platform: ${process.platform}`);
  console.log(`Node version: ${process.version}`);
  console.log('Running tests in sequence...\n');

  for (const test of TESTS) {
    const testPath = path.join(__dirname, test);
    console.log(`\n=== Running test: ${test} ===`);
    
    try {
      await runTest(testPath);
      console.log(`✅ Test ${test} completed\n`);
    } catch (error) {
      console.error(`❌ Test ${test} failed: ${error.message}\n`);
    }
    
    // Pause between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n=== All notification tests completed ===');
}

function runTest(testPath) {
  return new Promise((resolve, reject) => {
    const testProcess = spawn('node', [testPath], { stdio: 'inherit' });
    
    testProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
    
    testProcess.on('error', (error) => {
      reject(error);
    });
  });
}

// Run the tests
runTests().catch(error => {
  console.error('Test suite failed:', error);
  process.exit(1);
});