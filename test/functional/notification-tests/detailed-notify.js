// Enhanced notification test using node-notifier with better logging
const notifier = require('node-notifier');
const path = require('path');

// Set the path to the logo
const logoPath = path.join(__dirname, '../../../docs/assets/images/streetmerchant-logo.png');

console.log('Starting detailed notification test...');
console.log(`Using node-notifier version: ${require('node-notifier/package.json').version}`);
console.log(`Platform detected: ${process.platform}`);
console.log(`Logo path: ${logoPath}`);

// Detailed notification object
const notification = {
  title: '🔔 Streetmerchant Detailed Test',
  message: 'This is a test notification with detailed logging',
  icon: logoPath,
  sound: true,
  contentImage: logoPath, // macOS specific
  timeout: 10,
  closeLabel: 'Close', // macOS specific
  actions: ['View', 'Dismiss'], // macOS specific
  dropdownLabel: 'Actions', // macOS specific
  reply: true // macOS specific
};

console.log('Notification configuration:', JSON.stringify(notification, null, 2));

// Create notifier with debug mode
let macNotifier;
switch (process.platform) {
  case 'darwin':
    macNotifier = new notifier.NotificationCenter({withFallback: true});
    break;
  case 'win32':
    macNotifier = new notifier.WindowsToaster({withFallback: true});
    break;
  case 'linux':
    macNotifier = new notifier.NotifySend({withFallback: true});
    break;
  default:
    macNotifier = notifier;
}

// Send the notification with detailed error handling
console.log('Sending notification...');
macNotifier.notify(notification, function(error, response, metadata) {
  console.log('Notification callback received');
  
  if (error) {
    console.error('Notification error:', error);
  }
  
  if (response) {
    console.log('Notification response:', response);
  }
  
  if (metadata) {
    console.log('Notification metadata:', metadata);
  }
});

// Listen for events
macNotifier.on('click', function(notifierObject, options, event) {
  console.log('Notification clicked!', event);
});

macNotifier.on('timeout', function() {
  console.log('Notification timed out');
});

macNotifier.on('reply', function(notifierObject, options, response) {
  console.log('User replied to notification:', response);
});

macNotifier.on('action', function(notifierObject, options, index) {
  console.log('User clicked action button:', index);
});

// Keep the process running to receive events
console.log('Waiting for notification interaction...');
setTimeout(() => {
  console.log('Test completed. If you did not see a notification, check your system notification settings.');
  process.exit(0);
}, 10000);