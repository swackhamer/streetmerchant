# Configuration Reference

This document provides a comprehensive reference for all Streetmerchant configuration options. All settings are configured through environment variables in your `dotenv` file.

## Core Application Settings

| Variable | Description | Default |
|----------|-------------|---------|
| `AUTO_ADD_TO_CART` | Automatically add products to cart when in stock | `true` (if not Docker) |
| `BROWSER_TRUSTED` | Skip Chrome Sandbox (useful for containers) | `false` |
| `HEADLESS` | Run browser in headless mode (no GUI) | `true` |
| `IN_STOCK_WAIT_TIME` | Time to wait between requests for the same link if in stock (seconds) | `0` |
| `LOG_LEVEL` | Logging verbosity level (`error`, `warn`, `info`, `debug`, `trace`) | `info` |
| `LOW_BANDWIDTH` | Block images/fonts to reduce network traffic | `false` |
| `OPEN_BROWSER` | Open browser when item is found | `true` (if not Docker) |
| `PROTOCOL_TIMEOUT` | Timeout for Chrome DevTools Protocol commands (milliseconds) | `60000` |
| `RESTART_TIME` | Restart Chrome after defined milliseconds (0 for never) | `0` |
| `USER_AGENT` | Custom user agent used for requests | Browser default |
| `WEB_PORT` | Port for the web interface (not enabled if not set) | None |

## Page Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `PAGE_BACKOFF_MIN` | Minimum backoff time after forbidden response (milliseconds) | `10000` |
| `PAGE_BACKOFF_MAX` | Maximum backoff time after forbidden response (milliseconds) | `3600000` |
| `PAGE_SLEEP_MIN` | Minimum sleep time between product checks (milliseconds) | `5000` |
| `PAGE_SLEEP_MAX` | Maximum sleep time between product checks (milliseconds) | `10000` |
| `PAGE_TIMEOUT` | Navigation timeout (milliseconds) | `30000` |

## Store Selection and Filtering

| Variable | Description | Default |
|----------|-------------|---------|
| `STORES` | Comma-separated list of [stores](#supported-stores) to check | `amazon,bestbuy` |
| `SHOW_ONLY_BRANDS` | Filter to show only specific brands (comma-separated) | All brands |
| `SHOW_ONLY_MODELS` | Filter to show only specific models (comma-separated) | All models |
| `SHOW_ONLY_SERIES` | Filter to show only specific series (comma-separated) | All series |
| `MICROCENTER_LOCATION` | Specific MicroCenter location(s) to search | `web` |

## Price Limits

Maximum prices for different product series (whole numbers only, no currency symbol):

| Variable | Description |
|----------|-------------|
| `MAX_PRICE_SERIES_3050` | Max price for RTX 3050 cards |
| `MAX_PRICE_SERIES_3060` | Max price for RTX 3060 cards |
| `MAX_PRICE_SERIES_3060TI` | Max price for RTX 3060 Ti cards |
| `MAX_PRICE_SERIES_3070` | Max price for RTX 3070 cards |
| `MAX_PRICE_SERIES_3080` | Max price for RTX 3080 cards |
| `MAX_PRICE_SERIES_3090` | Max price for RTX 3090 cards |
| `MAX_PRICE_SERIES_4070` | Max price for RTX 4070 cards |
| `MAX_PRICE_SERIES_4080_16G` | Max price for RTX 4080 16G cards |
| `MAX_PRICE_SERIES_4090` | Max price for RTX 4090 cards |
| `MAX_PRICE_SERIES_5070` | Max price for RTX 5070 cards |
| `MAX_PRICE_SERIES_5080` | Max price for RTX 5080 cards |
| `MAX_PRICE_SERIES_5090` | Max price for RTX 5090 cards |
| `MAX_PRICE_SERIES_RX6700XT` | Max price for AMD RX 6700 XT cards |
| `MAX_PRICE_SERIES_RX6800` | Max price for AMD RX 6800 cards |
| `MAX_PRICE_SERIES_RX6800XT` | Max price for AMD RX 6800 XT cards |
| `MAX_PRICE_SERIES_RX6900XT` | Max price for AMD RX 6900 XT cards |
| `MAX_PRICE_SERIES_RX9070` | Max price for AMD RX 9070 cards |
| `MAX_PRICE_SERIES_RYZEN5600` | Max price for AMD Ryzen 5600X CPUs |
| `MAX_PRICE_SERIES_RYZEN5800` | Max price for AMD Ryzen 5800X CPUs |
| `MAX_PRICE_SERIES_RYZEN5900` | Max price for AMD Ryzen 5900X CPUs |
| `MAX_PRICE_SERIES_RYZEN5950` | Max price for AMD Ryzen 5950X CPUs |
| `MAX_PRICE_SERIES_RYZEN7800X3D` | Max price for AMD Ryzen 7800X3D CPUs |
| `MAX_PRICE_SERIES_RYZEN9800X3D` | Max price for AMD Ryzen 9800X3D CPUs |
| `MAX_PRICE_SERIES_RYZEN9950X` | Max price for AMD Ryzen 9950X CPUs |
| `MAX_PRICE_SERIES_SONYPS5C` | Max price for Sony PS5 console |
| `MAX_PRICE_SERIES_SONYPS5DE` | Max price for Sony PS5 digital edition |
| `MAX_PRICE_SERIES_XBOXSX` | Max price for Xbox Series X |
| `MAX_PRICE_SERIES_XBOXSS` | Max price for Xbox Series S |

## Screenshot Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `SCREENSHOT` | Take screenshot of page when item is found | `true` |
| `SCREENSHOT_DIR` | Directory for saving screenshots | `screenshots` |
| `SCREENSHOT_FULL_PAGE` | Take full page screenshot instead of just viewport | `false` |

## Proxy Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `PROXY_PROTOCOL` | Protocol for proxy connections | `http` |
| `PROXY_ADDRESS` | IP address or hostname of proxy server | None |
| `PROXY_PORT` | Port number for proxy server | `80` |

## Captcha Handler Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `CAPTCHA_HANDLER_CAPTURE_TYPE` | Type of captcha capture (`image` or `link`) | `link` |
| `CAPTCHA_HANDLER_POLL_INTERVAL` | Interval to check for user response (seconds) | `5` |
| `CAPTCHA_HANDLER_RESPONSE_TIMEOUT` | Timeout for user response (seconds) | `300` |
| `CAPTCHA_HANDLER_SERVICE` | Service for captcha handling (`discord` or `slack`) | None |
| `CAPTCHA_HANDLER_TOKEN` | Token for the bot user | None |
| `CAPTCHA_HANDLER_USER_ID` | Your user ID in the messaging service | None |

## Notification Service Configuration

### Discord

| Variable | Description | Default |
|----------|-------------|---------|
| `DISCORD_NOTIFY` | Enable Discord notifications | `false` |
| `DISCORD_WEBHOOK_URL` | Discord webhook URL | None |
| `DISCORD_NOTIFY_GROUP` | Discord user/role to tag (comma-separated) | None |
| `DISCORD_MENTION_GROUP` | Tag all users in group with notification | `true` |
| `DISCORD_DM_USER_IDS` | User IDs to send Direct Messages to (comma-separated) | None |
| `DISCORD_DM_NOTIFY` | Enable Discord Direct Message notifications | `false` |

### Telegram

| Variable | Description | Default |
|----------|-------------|---------|
| `TELEGRAM_NOTIFY` | Enable Telegram notifications | `false` |
| `TELEGRAM_ACCESS_TOKEN` | Telegram bot token | None |
| `TELEGRAM_CHAT_ID` | Telegram chat ID | None |

### Email

| Variable | Description | Default |
|----------|-------------|---------|
| `EMAIL_NOTIFY` | Enable email notifications | `false` |
| `EMAIL_SMTP_ADDRESS` | SMTP server address | None |
| `EMAIL_SMTP_PORT` | SMTP server port | None |
| `EMAIL_ADDRESS` | Email address to send from | None |
| `EMAIL_PASSWORD` | Password for email account | None |
| `EMAIL_TO` | Email address to send notifications to | None |

### Desktop Notifications

| Variable | Description | Default |
|----------|-------------|---------|
| `DESKTOP_NOTIFICATIONS` | Enable desktop notifications | `false` |

### SMS

| Variable | Description | Default |
|----------|-------------|---------|
| `SMS_NOTIFY` | Enable SMS notifications | `false` |
| `PHONE_NUMBER` | Phone number to send SMS to (comma-separated for multiple) | None |
| `PHONE_CARRIER` | Phone carrier (`att`,`google`,`sprint`,`tmobile`,`verizon`) | None |

### Slack

| Variable | Description | Default |
|----------|-------------|---------|
| `SLACK_NOTIFY` | Enable Slack notifications | `false` |
| `SLACK_WEBHOOK_URL` | Slack webhook URL | None |

### MQTT

| Variable | Description | Default |
|----------|-------------|---------|
| `MQTT_BROKER_ADDRESS` | MQTT broker address | None |
| `MQTT_BROKER_PORT` | MQTT broker port | None |
| `MQTT_CLIENT_ID` | MQTT client ID | None |
| `MQTT_PASSWORD` | MQTT password | None |
| `MQTT_QOS` | MQTT QoS level (0, 1, or 2) | None |
| `MQTT_TOPIC` | MQTT topic to publish to | None |
| `MQTT_USERNAME` | MQTT username | None |

### Pushbullet

| Variable | Description | Default |
|----------|-------------|---------|
| `PUSHBULLET_NOTIFY` | Enable Pushbullet notifications | `false` |
| `PUSHBULLET_ACCESS_TOKEN` | Pushbullet access token | None |

### Pushover

| Variable | Description | Default |
|----------|-------------|---------|
| `PUSHOVER_NOTIFY` | Enable Pushover notifications | `false` |
| `PUSHOVER_TOKEN` | Pushover application token | None |
| `PUSHOVER_USER` | Pushover user key | None |
| `PUSHOVER_PRIORITY` | Pushover notification priority (-2 to 2) | None |

### Sound

| Variable | Description | Default |
|----------|-------------|---------|
| `PLAY_SOUND` | Play a sound when item is found | `false` |
| `SOUND_FILE` | Path to sound file to play | None |

### Twitter

| Variable | Description | Default |
|----------|-------------|---------|
| `TWITTER_NOTIFY` | Enable Twitter notifications | `false` |
| `TWITTER_ACCESS_TOKEN` | Twitter access token | None |
| `TWITTER_ACCESS_TOKEN_SECRET` | Twitter access token secret | None |
| `TWITTER_CONSUMER_KEY` | Twitter consumer key | None |
| `TWITTER_CONSUMER_SECRET` | Twitter consumer secret | None |
| `TWITTER_TWEET_TAGS` | Hashtags to include in tweet (comma-separated) | None |

## Advanced Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `BROWSER_EXECUTABLE_PATH` | Path to Chrome/Chromium executable | Built-in Chromium |
| `CHROME_ARGS` | Additional command-line arguments for Chrome | None |
| `COUNTRY` | Country for regional store variants | `usa` |
| `CUDA_DEVICE_ORDER` | CUDA device order for GPU acceleration | None |
| `CUDA_VISIBLE_DEVICES` | CUDA visible devices for GPU acceleration | None |
| `DOCKER` | Indicates running in Docker environment | `false` |
| `NVIDIA_ADD_TO_CART_ATTEMPTS` | Maximum attempts to add Nvidia item to cart | `10` |
| `NVIDIA_SESSION_TTL` | Nvidia session time-to-live (milliseconds) | `60000` |
| `PUPPETEER_EXECUTABLE_PATH` | Path to Puppeteer executable | None |

## Supported Stores

Below is a partial list of supported stores. For the complete list, see the [Filter documentation](reference/filter.md).

| Store Name | Country | Environment Variable |
|------------|---------|---------------------|
| Amazon | US | `amazon` |
| Amazon | CA | `amazon-ca` |
| Amazon | DE | `amazon-de` |
| Amazon | UK | `amazon-uk` |
| Best Buy | US | `bestbuy` |
| Best Buy | CA | `bestbuy-ca` |
| B&H | US | `bandh` |
| Micro Center | US | `microcenter` |
| Newegg | US | `newegg` |
| Newegg | CA | `newegg-ca` |
| Walmart | US | `walmart` |

## Store-Specific Proxy Files

You can create store-specific proxy files in the root directory:

- `global.proxies`: Used for all stores
- `amazon.proxies`: Used for Amazon only
- `bestbuy.proxies`: Used for Best Buy only

Format: One proxy per line in the format `protocol://[user:password@]ip[:port]`

Example:
```
http://user:pass@192.168.1.1:8080
socks5://10.0.0.1:1080
```