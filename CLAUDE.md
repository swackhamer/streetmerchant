# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Streetmerchant is a stock checking application that continuously monitors various online retailers for product availability. It uses Puppeteer for browser automation to check stock status and can send notifications through multiple channels when items become available.

## Development Commands

### Setup
```bash
# Clone the repository and install dependencies
git clone https://github.com/jef/streetmerchant.git
cd streetmerchant
corepack enable
pnpm i
```

### Running the App
```bash
# Compile and run
pnpm run start

# For development with hot reloading
pnpm run start:dev

# Run with production settings
pnpm run start:production
```

### Testing
```bash
# Run all tests
pnpm test

# Run specific test files
npx jest test/unit/stock-checking.test.js
npx jest test/unit/notification-dispatching.test.js

# Run functional tests for notification
pnpm run test:notification

# Run functional tests for captcha
pnpm run test:captcha
```

### Code Quality
```bash
# Lint the code
pnpm run lint

# Fix linting issues
pnpm run fix

# Clean build artifacts
pnpm run clean

# Compile TypeScript
pnpm run compile

# Compile TypeScript for production
pnpm run compile:production
```

## Architecture

### Core Components

1. **Store Module** (`src/store/`)
   - Each file in `src/store/model/` represents a specific retailer.
   - Stores define CSS selectors (labels) to check for stock status.
   - The lookup module (`src/store/lookup.ts`) orchestrates stock checking across all configured stores.

2. **Browser Management** (`src/browser.ts`)
   - Manages Puppeteer browser instances.
   - Handles user profiles, proxy settings, and browser configuration.

3. **Configuration** (`src/config.ts`)
   - Loads application settings from environment variables.
   - Controls which stores to monitor, notification preferences, and browser behavior.

4. **Messaging** (`src/messaging/`)
   - Dispatches notifications through various channels when stock is found.
   - Supported platforms include Discord, Email, Telegram, SMS, Slack, Twitter, etc.

5. **Proxy Management** (`src/proxy.ts`)
   - Parses proxy strings and implements proxy rotation logic.

6. **Request Handling** (`src/handlers.ts`)
   - Intercepts network requests and responses in Puppeteer.
   - Implements features like low-bandwidth mode.

### Data Flow

1. The application initializes configuration and the list of active stores.
2. It enters a loop that repeatedly calls the `lookup` function for each active store.
3. The `lookup` function uses Puppeteer to navigate to product URLs and applies store-specific logic to check for stock.
4. If stock is found, it calls the messaging component to send notifications.

## Configuration

The application is heavily driven by environment variables, which can be set in a file named `.env` or `dotenv` (copied from `dotenv-example`).

### Environment Variable Handling

The application uses the following priority order when loading environment variables:
1. Custom config file specified with npm_config_conf
2. `.env` file in project root directory
3. `dotenv` file in project root directory (legacy)
4. `.env` file in parent directory
5. `dotenv` file in parent directory (legacy)
6. System environment variables

Variables defined in configuration files take precedence over system environment variables. Any environment variables not defined in the configuration files are preserved.

Important configuration options:
- `STORES`: Comma-separated list of stores to check
- `SHOW_ONLY_BRANDS`, `SHOW_ONLY_MODELS`, `SHOW_ONLY_SERIES`: Filters for specific products
- `MAX_PRICE_SERIES_*`: Maximum price thresholds for different product series
- Various notification service configurations (Discord, Email, Telegram, etc.)
- Browser and proxy settings

## Docker Support

The application can be run using Docker:

```bash
# Run with Docker Compose
docker-compose up -d

# For Portainer deployments
docker-compose -f docker-compose.portainer.yml up -d
```

## Extending the Codebase

### Adding a New Store

1. Create a new file in `src/store/model/` implementing the `Store` interface.
2. Define the store's properties (name, country, currency).
3. Specify CSS selectors (labels) for identifying stock status.
4. Add product links to monitor.
5. Add the store identifier to the supported stores list in documentation.

### Adding a New Product Series

1. Update relevant model files in `src/store/model/` to include links for the new series.
2. Add the series name to the configuration documentation.
3. Add appropriate filters in `dotenv-example`.