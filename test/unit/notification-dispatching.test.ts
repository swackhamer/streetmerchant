import {Link, Store} from '../../src/store/model/store';
// import path from 'path'; - Not used, removed to fix linting warning

// Mock notifications services first, then import sendNotification
jest.mock('../../src/messaging/apns', () => ({
  sendApns: jest.fn(),
}));
jest.mock('../../src/messaging/desktop', () => ({
  sendDesktopNotification: jest.fn(),
}));
jest.mock('../../src/messaging/discord', () => ({
  sendDiscordMessage: jest.fn(),
  sendDMAsync: jest.fn(),
}));
jest.mock('../../src/messaging/email', () => ({
  sendEmail: jest.fn(),
}));
jest.mock('../../src/messaging/freemobile', () => ({
  sendFreeMobileAlert: jest.fn(),
}));
jest.mock('../../src/messaging/gotify', () => ({
  sendGotifyNotification: jest.fn(),
}));
jest.mock('../../src/messaging/mqtt', () => ({
  sendMqttMessage: jest.fn(),
}));
jest.mock('../../src/messaging/ntfy', () => ({
  sendNtfyAlert: jest.fn(),
}));
jest.mock('../../src/messaging/pagerduty', () => ({
  sendPagerDutyNotification: jest.fn(),
}));
jest.mock('../../src/messaging/philips-hue', () => ({
  adjustPhilipsHueLights: jest.fn(),
}));
jest.mock('../../src/messaging/pushbullet', () => ({
  sendPushbulletNotification: jest.fn(),
}));
jest.mock('../../src/messaging/pushover', () => ({
  sendPushoverNotification: jest.fn(),
}));
jest.mock('../../src/messaging/redis', () => ({
  updateRedis: jest.fn(),
}));
jest.mock('../../src/messaging/slack', () => ({
  sendSlackMessage: jest.fn(),
  sendDMAsync: jest.fn(),
}));
jest.mock('../../src/messaging/sms', () => ({
  sendSms: jest.fn(),
}));
jest.mock('../../src/messaging/sound', () => ({
  playSound: jest.fn(),
}));
jest.mock('../../src/messaging/streamlabs', () => ({
  sendStreamLabsAlert: jest.fn(),
}));
jest.mock('../../src/messaging/telegram', () => ({
  sendTelegramMessage: jest.fn(),
}));
jest.mock('../../src/messaging/twilio', () => ({
  sendTwilioMessage: jest.fn(),
}));
// Twitch is commented out in source
jest.mock('../../src/messaging/twitter', () => ({
  sendTweet: jest.fn(),
}));

// Now import the functions we're testing
import {sendNotification, sendDMAsync} from '../../src/messaging/notification';
import {DMPayload} from '../../src/messaging';

// Import the mocked functions
import {sendApns} from '../../src/messaging/apns';
import {sendDesktopNotification} from '../../src/messaging/desktop';
import {
  sendDiscordMessage,
  sendDMAsync as sendDiscordDMAsync,
} from '../../src/messaging/discord';
import {sendEmail} from '../../src/messaging/email';
import {sendFreeMobileAlert} from '../../src/messaging/freemobile';
import {sendGotifyNotification} from '../../src/messaging/gotify';
import {sendMqttMessage} from '../../src/messaging/mqtt';
import {sendNtfyAlert} from '../../src/messaging/ntfy';
import {sendPagerDutyNotification} from '../../src/messaging/pagerduty';
import {adjustPhilipsHueLights} from '../../src/messaging/philips-hue';
import {sendPushbulletNotification} from '../../src/messaging/pushbullet';
import {sendPushoverNotification} from '../../src/messaging/pushover';
import {updateRedis} from '../../src/messaging/redis';
import {
  sendSlackMessage,
  sendDMAsync as sendSlackDMAsync,
} from '../../src/messaging/slack';
import {sendSms} from '../../src/messaging/sms';
import {playSound} from '../../src/messaging/sound';
import {sendStreamLabsAlert} from '../../src/messaging/streamlabs';
import {sendTelegramMessage} from '../../src/messaging/telegram';
import {sendTwilioMessage} from '../../src/messaging/twilio';
import {sendTweet} from '../../src/messaging/twitter';

describe('Notification Dispatching', () => {
  let mockLink: Link;
  let mockStore: Store;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Create mock Link and Store objects
    mockLink = {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://example.com/product/1',
    };

    mockStore = {
      name: 'TestStore',
      country: 'US',
      currency: '$',
      links: [mockLink],
      labels: {}, // Add necessary labels if needed for specific tests
    };
  });

  test('should call all enabled notification services with correct arguments', () => {
    sendNotification(mockLink, mockStore);

    // Verify that each service function was called with the correct arguments
    expect(playSound).toHaveBeenCalledTimes(1);
    expect(sendNtfyAlert).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendDiscordMessage).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendDesktopNotification).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendEmail).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendSms).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendApns).toHaveBeenCalledWith(mockLink, mockStore);
    expect(adjustPhilipsHueLights).toHaveBeenCalledTimes(1);
    expect(sendGotifyNotification).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendMqttMessage).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendPagerDutyNotification).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendPushbulletNotification).toHaveBeenCalledWith(
      mockLink,
      mockStore
    );
    expect(sendPushoverNotification).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendSlackMessage).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendTelegramMessage).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendTweet).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendTwilioMessage).toHaveBeenCalledWith(mockLink, mockStore);
    expect(updateRedis).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendStreamLabsAlert).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendFreeMobileAlert).toHaveBeenCalledWith(mockLink, mockStore);
  });

  test('notification test coverage', () => {
    // This is just a placeholder to ensure code coverage
    // More specific tests would be needed in a real implementation

    // We don't need to set up additional spies as the mocks are already in place

    // Reset all mocks first
    jest.clearAllMocks();

    // Call the notification function
    sendNotification(mockLink, mockStore);

    // Simply verify a few services were called
    expect(sendDiscordMessage).toHaveBeenCalledWith(mockLink, mockStore);
    expect(sendEmail).toHaveBeenCalledWith(mockLink, mockStore);
  });

  describe('sendDMAsync', () => {
    test('should call sendSlackDMAsync when service is slack', async () => {
      const payload: DMPayload = {content: 'test message', type: 'text'};
      await sendDMAsync('slack', payload);
      expect(sendSlackDMAsync).toHaveBeenCalledWith(payload);
      expect(sendDiscordDMAsync).not.toHaveBeenCalled();
    });

    test('should call sendDiscordDMAsync when service is discord', async () => {
      const payload: DMPayload = {content: 'test message', type: 'text'};
      await sendDMAsync('discord', payload);
      expect(sendDiscordDMAsync).toHaveBeenCalledWith(payload);
      expect(sendSlackDMAsync).not.toHaveBeenCalled();
    });

    test('should not call any DM function for unknown service', async () => {
      const payload: DMPayload = {content: 'test message', type: 'text'};
      await sendDMAsync('unknown', payload);
      expect(sendDiscordDMAsync).not.toHaveBeenCalled();
      expect(sendSlackDMAsync).not.toHaveBeenCalled();
    });
  });
});
