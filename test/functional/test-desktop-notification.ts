/**
 * Desktop Notification Test
 * 
 * This test specifically checks the desktop notification functionality
 * across different platforms.
 */

import {Link, Store} from '../../src/store/model';
import {logger} from '../../src/logger';
import {config} from '../../src/config';
import {join} from 'path';
import notifier from 'node-notifier';
import {getTestStore} from '../util';

// Force enable desktop notifications for testing
// @ts-ignore - Overriding readonly property for testing
config.notifications.desktop = true;

// Get test store and link
const store = getTestStore();
const link = store.links[0];

// Log platform information
logger.info(`Testing desktop notifications on platform: ${process.platform}`);
logger.info(`Using node-notifier version: ${require('node-notifier/package.json').version}`);

// Path to the logo
const logoPath = join(
  __dirname,
  '../../docs/assets/images/streetmerchant-logo.png'
);

// Product URL
const productUrl = link.cartUrl ? link.cartUrl : link.url;

// Get platform-specific notifier
let notifierInstance;
switch (process.platform) {
  case 'darwin':
    notifierInstance = new notifier.NotificationCenter({withFallback: true});
    break;
  case 'win32':
    notifierInstance = new notifier.WindowsToaster({withFallback: true});
    break;
  case 'linux':
    notifierInstance = new notifier.NotifySend({withFallback: true});
    break;
  default:
    notifierInstance = notifier;
}

// Create test notification
const notification = {
  title: 'Streetmerchant Test',
  message: `${store.name}: ${link.brand} ${link.model} (Test Notification)`,
  icon: logoPath,
  contentImage: logoPath, // macOS specific
  sound: true,
  wait: true,
  timeout: 20,
  closeLabel: 'Close', // macOS specific
  actions: ['Test Action', 'Dismiss'], // macOS specific
  dropdownLabel: 'Actions', // macOS specific
};

logger.info('Sending test desktop notification...');
logger.info(`Notification options: ${JSON.stringify(notification, null, 2)}`);

// Send notification
notifierInstance.notify(notification, (error, response, metadata) => {
  if (error) {
    logger.error('❌ Desktop notification test failed', error);
    process.exit(1);
  }
  
  if (response) {
    logger.info(`Response: ${response}`);
  }
  
  if (metadata) {
    logger.info(`Metadata: ${JSON.stringify(metadata)}`);
  }
  
  logger.info('✅ Desktop notification test succeeded');
});

// Set up event handlers
notifierInstance.on('click', () => {
  logger.info('Notification clicked');
});

notifierInstance.on('timeout', () => {
  logger.info('Notification timed out');
});

notifierInstance.on('action', (notifierObj, options, index) => {
  logger.info(`Action clicked: ${index}`);
});

// Keep the process running for events
setTimeout(() => {
  logger.info('Desktop notification test completed');
  process.exit(0);
}, 30000); // Wait for 30 seconds max for user interaction