# Streetmerchant Memory Bank

This document serves as a quick reference and memory bank for key information about the Streetmerchant project.

## Project Overview

Streetmerchant is a stock checking application that continuously monitors online retailers for product availability using browser automation. It notifies users through various channels when items become available.

## Core Components

### 1. Store Module (`src/store/`)
- **Purpose**: Defines how stock is checked across different retailers
- **Key Files**:
  - `model/*.ts`: Individual store implementations
  - `model/series/`: Series-based product link organization
  - `model/auto-load-series.ts`: Dynamic loading of series links
  - `model/series-links.ts`: Link management and filtering
  - `lookup.ts`: Orchestrates stock checking process
  - `filter.ts`: Filters products based on configuration

### 2. Browser Management (`src/browser.ts`)
- **Purpose**: Manages Puppeteer browser instances
- **Key Features**:
  - Browser instance creation and reuse
  - Page configuration (user agents, request interception)
  - Proxy integration
  - Protocol timeout handling (60s default)
  - Error management

### 3. Configuration (`src/config.ts`)
- **Purpose**: Centralizes application settings
- **Key Settings**:
  - Store selection
  - Product filtering
  - Browser behavior
  - Notification preferences
  - Proxy configuration

### 4. Messaging (`src/messaging/`)
- **Purpose**: Dispatches notifications
- **Supported Channels**:
  - Discord, Slack, Telegram
  - Email, SMS
  - Desktop notifications
  - Sound alerts
  - Various other services

### 5. Proxy Management (`src/proxy.ts`)
- **Purpose**: Manages proxy configuration
- **Features**:
  - Proxy parsing
  - Rotation logic
  - Store-specific proxies

### 6. Request Handling (`src/handlers.ts`)
- **Purpose**: Network request interception
- **Features**:
  - Resource blocking
  - Request modification
  - Response analysis

### 7. Error Handling (`src/util.ts`)
- **Purpose**: Error management
- **Features**:
  - Error filtering
  - Retry logic
  - Protocol error handling

## Key Data Flows

1. **Initialization**:
   - Load configuration from environment variables
   - Initialize browser management
   - Set up notification channels

2. **Stock Checking Loop**:
   - For each configured store:
     - Get a browser instance
     - Navigate to product pages
     - Evaluate elements using store-specific selectors
     - Determine stock status
     - Send notifications if in stock
     - Apply backoff strategy if necessary

3. **Notification Process**:
   - Format message with product information
   - Dispatch to all enabled notification channels
   - Optionally take screenshot of product page
   - Optionally open browser to product page

## Recent Improvements

1. **Series-Based Link Organization**:
   - Implemented a directory structure organizing links by product series
   - Created helper modules for dynamic link loading
   - Added link filtering by brand, model, and price
   - Improved code maintainability and organization

2. **Protocol Timeout Enhancement**:
   - Added configurable `PROTOCOL_TIMEOUT` (default: 60s)
   - Prevents "Network.enable timed out" crashes
   - Improves stability especially with proxies

3. **Enhanced Error Handling**:
   - Improved filtering for protocol-related errors
   - Reduced log pollution from expected errors
   - Better patterns for detecting transient vs. critical errors

4. **Test Coverage Improvements**:
   - Added tests for `util.ts` and `banner.ts`
   - Enhanced notification testing
   - Better mocking strategies

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Browser crashes with protocol errors | Increase `PROTOCOL_TIMEOUT` in dotenv |
| High bandwidth usage | Enable `LOW_BANDWIDTH=true` |
| Rate limiting from retailers | Use proxy rotation, increase page sleep times |
| Captchas appearing | Configure captcha handling, use clean user agents |
| Memory leaks | Ensure browser instances are properly closed |

## Configuration Quick Reference

```
# Store Selection
STORES=amazon,bestbuy,newegg

# Product Filtering
SHOW_ONLY_BRANDS=evga,asus
SHOW_ONLY_SERIES=3080,3090

# Browser Configuration
HEADLESS=true
PAGE_TIMEOUT=30000
PROTOCOL_TIMEOUT=60000

# Notification Channels
DISCORD_NOTIFY=true
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

## Development Commands

```bash
# Start application
pnpm run start

# Development mode with hot reloading
pnpm run start:dev

# Run tests
pnpm test

# Lint code
pnpm run lint

# Fix linting issues
pnpm run fix
```

## Project Structure

```
/src
  /messaging        # Notification implementations
  /store
    /model          # Store-specific implementations
      /series       # Series-based link organization
        /3080       # RTX 3080 series links
        /3070       # RTX 3070 series links
        /common     # Shared utilities for series-based organization
      auto-load-series.ts  # Dynamic series link loading
      series-links.ts      # Link management and filtering
    lookup.ts       # Core stock checking orchestration
  browser.ts        # Browser management
  config.ts         # Configuration handling
  proxy.ts          # Proxy management
  handlers.ts       # Request interceptors
  util.ts           # Utility functions
  
/test
  /functional       # Functional tests
  /unit             # Unit tests
```

## Key Design Patterns

1. **Strategy Pattern**: Store implementations
2. **Factory Pattern**: Store and link creation
3. **Dependency Injection**: Browser instances
4. **Observer Pattern**: Notification system
5. **Factory Method**: Browser/page creation
6. **Dynamic Module Loading**: Series-specific links
7. **Retry with Exponential Backoff**: Network requests