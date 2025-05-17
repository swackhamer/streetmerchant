// Test notification using Applescript
const { exec } = require('child_process');

const title = 'Streetmerchant Apple Test';
const message = 'This is a test notification using AppleScript';

// Only run on macOS
if (process.platform !== 'darwin') {
  console.log('This test only works on macOS.');
  process.exit(0);
}

const appleScript = `
display notification "${message}" with title "${title}" sound name "Ping"
`;

exec(`osascript -e '${appleScript}'`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log('Notification sent via AppleScript');
});