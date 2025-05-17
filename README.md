# Streetmerchant

**The world's most powerful stock checker for online retailers**

Streetmerchant is an automated stock checker that continuously monitors various online retailers for product availability and sends notifications through multiple channels when items become available.

## Features

- **Advanced Stock Monitoring**: Continuously checks multiple retailers for product availability
- **Broad Retailer Support**: Works with 100+ retailers across multiple countries
- **Robust Notification System**: Sends alerts through Discord, Email, Telegram, SMS, Slack, Twitter, and more
- **Flexible Configuration**: Filter products by brand, model, series, and price
- **Captcha Handling**: Built-in strategies to handle captchas and browser fingerprinting
- **Proxy Support**: Rotate through multiple proxies to avoid rate limiting
- **Extensible**: Easy to add new retailers or extend functionality

## Quick Start

```bash
# Clone the repository and install dependencies
git clone https://github.com/swackhamer/streetmerchant.git
cd streetmerchant
corepack enable
pnpm i

# Create a configuration file from the example
cp dotenv-example dotenv

# Edit the dotenv file to configure your preferences
# At minimum, set up your desired products and notification methods
nano dotenv

# Start the application
pnpm run start
```

## Documentation

Detailed documentation is available in the [docs folder](./docs):

- [Getting Started](./docs/getting-started.md) - Installation and initial setup
- [Usage Guide](./docs/usage.md) - How to use Streetmerchant effectively
- [Configuration Reference](./docs/configuration-reference.md) - All configuration options
- [Architecture Overview](./docs/architecture.md) - Technical architecture
- [Troubleshooting](./docs/troubleshooting.md) - Solutions for common issues
- [Extension Guide](./docs/extension-guide.md) - How to add new retailers or features

## Docker Support

Streetmerchant can be run in Docker for easier deployment:

```bash
# Run with Docker Compose
docker-compose up -d

# For Portainer deployments
docker-compose -f docker-compose.portainer.yml up -d
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

This project is a fork of the original [jef/streetmerchant](https://github.com/jef/streetmerchant) project, with improvements and updates.