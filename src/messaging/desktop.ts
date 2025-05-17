import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import {join} from 'path';
import notifier from 'node-notifier';

const {desktop} = config.notifications;

/**
 * Sends a desktop notification with enhanced features and error handling
 * @param link The product link information
 * @param store The store information
 */
export function sendDesktopNotification(link: Link, store: Store) {
  if (desktop) {
    logger.debug('↗ sending desktop notification');
    
    // Get the platform-specific notifier
    const notifierInstance = getPlatformNotifier();
    
    // Path to the logo
    const logoPath = join(
      __dirname,
      '../../../docs/assets/images/streetmerchant-logo.png'
    );
    
    // Product URL (prefer cart URL if available)
    const productUrl = link.cartUrl ? link.cartUrl : link.url;
    
    // Prepare notification options
    const notificationOptions = {
      title: Print.inStock(link, store),
      message: `${store.name}: ${link.brand} ${link.model}`,
      icon: logoPath,
      contentImage: logoPath, // macOS specific
      open: productUrl,
      sound: true,
      wait: true, // Wait for user interaction
      timeout: 20, // Notification timeout in seconds
      closeLabel: 'Close', // macOS specific
      actions: ['Open URL', 'Dismiss'], // macOS specific
      dropdownLabel: 'Actions', // macOS specific
    };
    
    // Send notification with detailed error handling
    notifierInstance.notify(notificationOptions, (error, response, metadata) => {
      if (error) {
        logger.error('✖ desktop notification failed', error);
        return;
      }
      
      if (response) {
        logger.debug(`Desktop notification response: ${response}`);
      }
      
      if (metadata) {
        logger.debug(`Desktop notification metadata: ${JSON.stringify(metadata)}`);
      }
      
      logger.info('✔ desktop notification sent');
    });
    
    // Set up event handlers
    notifierInstance.on('click', () => {
      logger.debug('Desktop notification clicked');
    });
    
    notifierInstance.on('timeout', () => {
      logger.debug('Desktop notification timed out');
    });
    
    notifierInstance.on('action', (notifierObj, options, index) => {
      logger.debug(`Desktop notification action clicked: ${index}`);
      if (index === 0) { // "Open URL" action
        import('open').then(({default: open}) => {
          open(productUrl);
        });
      }
    });
  }
}

/**
 * Gets the appropriate notifier instance for the current platform
 * @returns The platform-specific notifier instance
 */
function getPlatformNotifier() {
  const platform = process.platform;
  
  switch (platform) {
    case 'darwin':
      // Use NotificationCenter on macOS
      return new notifier.NotificationCenter({
        withFallback: true
      });
    case 'win32':
      // Use WindowsToaster on Windows
      return new notifier.WindowsToaster({
        withFallback: true
      });
    case 'linux':
      // Use NotifySend on Linux
      return new notifier.NotifySend({
        withFallback: true
      });
    default:
      // Use the generic notifier as fallback
      return notifier;
  }
}
