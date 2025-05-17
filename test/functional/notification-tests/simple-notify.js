// Simple notification test
const {notify} = require('node-notifier');

notify({
  title: 'Simple Test',
  message: 'This is a very simple test',
  sound: true,
});

console.log('Simple notification sent - check your notification center');