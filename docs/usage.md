# Streetmerchant Usage Guide

This document provides comprehensive guidance on how to effectively use Streetmerchant for stock checking and notifications.

## Setup and Installation

### Prerequisites

- [Node.js 16 (LTS)](https://nodejs.org/en/) or [Docker](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)

### Installation Steps

#### Using Node.js

1. Clone the repository:
   ```bash
   git clone https://github.com/jef/streetmerchant.git
   cd streetmerchant
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create your configuration file:
   ```bash
   cp dotenv-example dotenv
   ```

4. Edit the `dotenv` file with your preferred settings (see Configuration section below)

5. Start the application:
   ```bash
   pnpm run start
   ```

For development with hot reloading:
```bash
pnpm run start:dev
```

#### Using Docker

1. Create your configuration file:
   ```bash
   cp dotenv-example dotenv
   ```

2. Edit the `dotenv` file with your preferred settings

3. Run with Docker:
   ```bash
   docker run -it --rm --env-file ./dotenv ghcr.io/jef/streetmerchant:latest
   ```

   Or using docker-compose:
   ```bash
   docker-compose up
   ```

## Key Configuration Options

Streetmerchant is highly configurable via environment variables in the `dotenv` file. Here are the most important settings:

### Store Selection

```
STORES=amazon,bestbuy,newegg
```

Comma-separated list of stores to check. See the full list of supported stores in the reference documentation.

### Product Filtering

```
SHOW_ONLY_BRANDS=evga,asus
SHOW_ONLY_SERIES=3080,3090
SHOW_ONLY_MODELS=ftw3,strix
```

These settings help you filter which products to track.

### Browser Configuration

```
HEADLESS=true
PAGE_TIMEOUT=30000
PROTOCOL_TIMEOUT=60000
BROWSER_TRUSTED=false
```

- `HEADLESS`: Run browser in headless mode (no GUI)
- `PAGE_TIMEOUT`: Timeout for page navigation (milliseconds)
- `PROTOCOL_TIMEOUT`: Timeout for Chrome DevTools Protocol commands (milliseconds)
- `BROWSER_TRUSTED`: Skip Chrome Sandbox (useful in Docker)

### Notification Settings

Enable various notification services:

```
DISCORD_NOTIFY=true
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...

TELEGRAM_NOTIFY=true
TELEGRAM_ACCESS_TOKEN=
TELEGRAM_CHAT_ID=

EMAIL_NOTIFY=true
EMAIL_SMTP_ADDRESS=smtp.gmail.com
EMAIL_SMTP_PORT=587
EMAIL_ADDRESS=example@gmail.com
EMAIL_PASSWORD=app_password_here
```

### Proxy Configuration

```
PROXY_PROTOCOL=http
PROXY_ADDRESS=123.123.123.123
PROXY_PORT=80
```

For multiple proxies, create a file named `[store].proxies` or `global.proxies` with one proxy per line in the format: `protocol://[user:password@]ip[:port]`

## Advanced Features

### Using Protocol Timeout

The `PROTOCOL_TIMEOUT` setting (default: 60000ms) helps prevent "Network.enable timed out" errors that can crash the application. This setting determines how long Puppeteer waits for Chrome DevTools Protocol commands to complete.

```
PROTOCOL_TIMEOUT=60000
```

Increase this value if you're experiencing protocol timeout errors, especially when using slower connections or proxies.

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific tests
npx jest test/unit/stock-checking.test.js
```

### Linting and Code Quality

```bash
# Lint code
pnpm run lint

# Fix linting issues
pnpm run fix
```

## Troubleshooting

### Common Issues

1. **Browser crashes with protocol errors**
   - Increase `PROTOCOL_TIMEOUT` in your dotenv file
   - Check proxy settings if using proxies

2. **High bandwidth usage**
   - Use `LOW_BANDWIDTH=true` to block images and fonts

3. **Rate limiting from retailers**
   - Use proxy rotation with multiple proxies
   - Increase page sleep times with `PAGE_SLEEP_MIN` and `PAGE_SLEEP_MAX`

4. **Captchas appearing**
   - Configure captcha handling settings
   - Use clean user agents and residential proxies

For more detailed troubleshooting, check the logs (adjust `LOG_LEVEL` for more verbosity) or join the community on [Discord](https://discord.gg/gbVY4vB9JF).

## Web Interface

Streetmerchant can optionally run a web interface for monitoring:

```
WEB_PORT=3000
```

Access the interface at `http://localhost:3000` (or whatever port you specify).