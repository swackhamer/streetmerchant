# Getting Started with Streetmerchant

This guide will help you set up and run Streetmerchant to monitor online retailers for product availability.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js 16 (LTS)](https://nodejs.org/en/) or later
- [Git](https://git-scm.com/)
- (Optional) [Docker](https://docs.docker.com/get-docker/) for containerized deployment

## Installation Methods

### Method 1: Using Node.js (Recommended)

1. **Clone the repository**

   ```bash
   git clone https://github.com/jef/streetmerchant.git
   cd streetmerchant
   ```

2. **Install dependencies**

   ```bash
   corepack enable  # Enables pnpm
   pnpm install
   ```

3. **Configure the application**

   ```bash
   cp dotenv-example .env
   ```

   Edit the `.env` file with your preferred settings (see Configuration section below). The application now properly loads all configuration from the `.env` file in the current working directory, ensuring that these settings take precedence over any system environment variables.
   
   **Important**: The application will only launch browsers for stores explicitly listed in the `STORES` variable in your `.env` file, saving resources by not checking stores you're not interested in.

4. **Start Streetmerchant**

   ```bash
   pnpm run start
   ```

   For development with hot reloading:

   ```bash
   pnpm run start:dev
   ```

### Method 2: Using Docker

1. **Create configuration file**

   ```bash
   cp dotenv-example .env
   ```

   Edit the `.env` file with your preferred settings. You can also use the legacy `dotenv` filename if preferred.

2. **Run with Docker**

   ```bash
   docker run -it --rm --env-file ./.env ghcr.io/jef/streetmerchant:latest
   ```

   Or using docker-compose:

   ```bash
   docker-compose up -d
   ```

## Basic Configuration

Edit your `.env` (or `dotenv`) file to customize Streetmerchant's behavior. Here are the most important settings:

### Store Selection

Specify which stores to monitor:

```
STORES=amazon,bestbuy,newegg
```

You can also set store-specific sleep times:

```
STORES=amazon:5000:10000,bestbuy:8000:15000
```

Format: `storename:min_sleep:max_sleep`

### Product Filtering

Filter by brands, series, or models:

```
SHOW_ONLY_BRANDS=evga,asus
SHOW_ONLY_SERIES=3080,3090
SHOW_ONLY_MODELS=ftw3,strix
```

With the series-based organization system, Streetmerchant will automatically load links from the appropriate series directories, making it easier to target specific hardware generations.

### Price Limits

Set maximum prices to avoid notifications for overpriced items:

```
MAX_PRICE_SERIES_3080=900
MAX_PRICE_SERIES_3090=1600
```

### Browser Settings

Configure browser behavior:

```
HEADLESS=true
PAGE_TIMEOUT=30000
PROTOCOL_TIMEOUT=60000
PAGE_SLEEP_MIN=5000
PAGE_SLEEP_MAX=10000
```

### Notifications

Enable various notification methods:

```
# Discord
DISCORD_NOTIFY=true
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...

# Email
EMAIL_NOTIFY=true
EMAIL_SMTP_ADDRESS=smtp.gmail.com
EMAIL_SMTP_PORT=587
EMAIL_ADDRESS=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## Testing Your Setup

### Test Notifications

Verify your notification settings are working correctly:

```bash
pnpm run test:notification
```

### Test Captcha Handler

If you've configured the captcha handler:

```bash
pnpm run test:captcha
```

## Running Multiple Instances

You can run multiple instances of Streetmerchant to distribute the load:

1. Create separate configuration files (e.g., `.env.nvidia` and `.env.amd`)
2. Start each instance with its own configuration:

   ```bash
   npm_config_conf=.env.nvidia pnpm run start
   npm_config_conf=.env.amd pnpm run start
   ```

## Deployment Considerations

### Memory Usage

Streetmerchant can consume significant memory, especially when monitoring many stores. Consider:

- Setting `BROWSER_TRUSTED=true` in containerized environments
- Setting `RESTART_TIME=3600000` to restart the browser every hour
- Using the `LOW_BANDWIDTH=true` option to reduce resource usage

### Network Considerations

- Retailers may rate-limit or block IP addresses that make too many requests
- Consider using proxy rotation (see [Proxy Configuration](configuration-reference.md#proxy-configuration))
- Be respectful of retailer servers by increasing sleep times between checks

### Security

- Never share your `dotenv` file as it may contain sensitive information
- For notification services, use tokens with minimal permissions
- If running in a shared environment, ensure proper access controls

## Troubleshooting

If you encounter issues:

- Check the [Troubleshooting Guide](troubleshooting.md)
- Increase log verbosity with `LOG_LEVEL=debug`
- Check for recent issues in the [GitHub repository](https://github.com/jef/streetmerchant/issues)

## Next Steps

Once you have Streetmerchant running, you might want to:

- Set up additional [notification channels](configuration-reference.md#notification-service-configuration)
- Customize the [web interface](usage.md#web-interface)
- Learn how to [extend Streetmerchant](extension-guide.md) with custom stores or notification methods
- Contribute to the project by fixing bugs or adding features