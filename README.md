# Streetmerchant

<p align="center">
  <img src="./docs/assets/images/streetmerchant-banner.png" alt="Streetmerchant banner">
</p>

<p align="center"><strong>The world's most powerful stock checker for online retailers</strong></p>

Streetmerchant is an automated stock checking application that continuously monitors various online retailers for product availability and sends notifications when items become available. It's designed for users who want to find hard-to-get products like graphics cards, consoles, or other high-demand items.

## Key Features

- **Real-time Stock Monitoring:** Continuously checks 100+ retailers across multiple countries
- **Broad Product Support:** Works with graphics cards, CPUs, gaming consoles, and other products
- **Robust Notification System:** Sends alerts through multiple channels:
  - Discord, Telegram, Twitter, Email, SMS
  - Desktop notifications, browser pop-ups
  - Mobile push notifications, Slack, and more
- **Advanced Filtering:** Target specific brands, models, series, and price ranges
- **Centralized Store Registry:** Improved store management and configuration
  - Single registry for all store configurations
  - Type-safe factory pattern for store creation
  - Reduced duplication and improved maintainability
  - Streamlined process for adding new stores

- **Centralized Product Data:** Advanced product link management
  - Unified data structure for all product links
  - Efficient filtering and retrieval by series, brand, model, and price
  - Dramatically reduced file count and complexity
  - Enhanced extensibility for adding new products

- **Modular Architecture:** Improved code organization and maintainability
  - Clear separation of concerns between modules
  - Class-based browser session management
  - Enhanced network request handling
  - Standardized error handling and recovery
- **Resilient Architecture:** Handles network issues and website anti-bot measures
  - Protocol timeout protection to prevent crashes
  - Error recovery mechanisms for consistent uptime
  - Smart retry strategies with exponential backoff
- **Proxy Support:** Rotate through multiple proxies to avoid rate limiting
- **Captcha Handling:** Options for solving captchas
- **Lightweight Mode:** Low-bandwidth option for reduced resource usage
- **Docker Support:** Easy containerized deployment

## Installation

### Prerequisites

- Node.js 16 or later
- Git
- (Optional) Docker for containerized deployment

### Method 1: Direct Installation

```bash
# Clone the repository
git clone https://github.com/swackhamer/streetmerchant.git
cd streetmerchant

# Enable pnpm and install dependencies
corepack enable
pnpm install

# Create configuration file
cp dotenv-example dotenv

# Edit configuration file to set up your preferences
# At minimum, configure stores and notification methods

# Run tests to ensure everything is working
pnpm test

# Start the application
pnpm run start

# For development with hot reloading
pnpm run start:dev
```

### Method 2: Docker Installation

```bash
# Clone the repository
git clone https://github.com/swackhamer/streetmerchant.git
cd streetmerchant

# Create configuration file
cp dotenv-example dotenv

# Edit configuration file
# Start with Docker
docker-compose up -d
```

## Configuration

Streetmerchant is configured through environment variables in a `dotenv` file. Here are some important configuration options:

### Store Selection

```
# Comma-separated list of stores to check
STORES=amazon,bestbuy,newegg

# With custom sleep times (in ms) between checks
STORES=amazon:5000:10000,bestbuy:8000:15000
```

### Product Filtering

```
# Only show specific brands
SHOW_ONLY_BRANDS=evga,asus,zotac

# Only show specific series
SHOW_ONLY_SERIES=3080,3090,5090

# Only show specific models
SHOW_ONLY_MODELS=ftw3,strix,tuf
```

With the centralized store registry and product data system, Streetmerchant can efficiently manage hundreds of product links across multiple stores, making it easier to target specific hardware generations while maintaining a clean, modular codebase.

### Price Limits

```
# Maximum price for different series (in your local currency)
MAX_PRICE_SERIES_3080=900
MAX_PRICE_SERIES_3090=1600
```

### Browser Configuration

```
# Run in headless mode (no visible browser)
HEADLESS=true

# Page and protocol timeouts (in ms)
PAGE_TIMEOUT=30000
PROTOCOL_TIMEOUT=60000
```

### Notification Setup

```
# Discord notifications
DISCORD_NOTIFY=true
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...

# Email notifications
EMAIL_NOTIFY=true
EMAIL_SMTP_ADDRESS=smtp.gmail.com
EMAIL_SMTP_PORT=587
EMAIL_ADDRESS=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

See the [Configuration Reference](./docs/configuration-reference.md) for a complete list of options.

## Documentation

### User Documentation
- [Getting Started](./docs/getting-started.md) - Installation and initial setup
- [Usage Guide](./docs/usage.md) - How to use Streetmerchant effectively
- [Configuration Reference](./docs/configuration-reference.md) - All configuration options
- [Troubleshooting](./docs/troubleshooting.md) - Solutions for common issues

### Developer Documentation
- [Architecture Overview](./docs/architecture.md) - Technical architecture and system components
- [Memory Bank](./docs/memory-bank.md) - Quick reference for project components and concepts
- [Series-Based Links](./docs/series-based-links.md) - Documentation for the series-based organization system
- [Centralized Data Approach](./docs/centralized-data-approach.md) - Documentation for the store registry and centralized product data
- [Extension Guide](./docs/extension-guide.md) - How to add new retailers or features
- [Refactoring Guide](./docs/refactoring-guide.md) - Guidelines for code refactoring and improvements

### Project Information
- [Future Plans](./docs/future-plans.md) - Roadmap and planned improvements
- [Changelog](./docs/changelog.md) - History of changes and improvements

## Testing

```bash
# Run all tests
pnpm test

# Test notification functionality
pnpm run test:notification

# Test captcha handling
pnpm run test:captcha
```

## Development Commands

```bash
# Run with hot reloading for development
pnpm run start:dev

# Lint the code
pnpm run lint

# Fix linting issues
pnpm run fix

# Clean build artifacts
pnpm run clean

# Compile TypeScript
pnpm run compile
```

## Supported Stores

Streetmerchant currently supports 100+ stores across multiple countries, including:

- Amazon (US, CA, DE, ES, FR, IT, NL, UK)
- Best Buy (US, CA)
- Newegg (US, CA)
- B&H Photo
- Micro Center
- Walmart
- Target
- And many more...

Check the [Configuration Reference](./docs/configuration-reference.md#supported-stores) for a complete list.

## Docker Support

Streetmerchant can be run in Docker for easier deployment:

```bash
# Run with Docker Compose
docker-compose up -d

# For Portainer deployments
docker-compose -f docker-compose.portainer.yml up -d
```

## Community and Support

- Found a bug? File a [GitHub issue](https://github.com/swackhamer/streetmerchant/issues/new/choose).

## Contributing

- Improve documentation through [pull requests](https://github.com/swackhamer/streetmerchant/pulls).
- Implement new features or fix bugs by forking the repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

This project is a fork of the original [jef/streetmerchant](https://github.com/jef/streetmerchant) project, with improvements including:
- Centralized store registry for improved maintainability
- Consolidated product data management system
- Modular architecture with clear separation of concerns
- Protocol timeout protection to prevent crashes
- Updated dependencies for better stability
- Improved error handling and resilience
- Enhanced documentation and developer experience
- Comprehensive test coverage for core components