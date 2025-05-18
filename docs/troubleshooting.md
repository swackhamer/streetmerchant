# Troubleshooting Guide

This document provides solutions for common issues you might encounter when running Streetmerchant.

## Configuration Issues

### Store Configuration Not Recognized

**Problem:** The application reports "Processing 0 configured stores" even though STORES is set in your .env file.

**Solution:**
- Verify your STORES format. Use commas to separate store names and colons for sleep times:
  ```
  STORES=amazon:10000:30000,bestbuy,newegg:50000:80000
  ```
- Make sure there are no spaces before or after commas
- Check that store names match exactly what's in the registry (case-sensitive)

### Series Filtering Not Working

**Problem:** The application does not show any products for your specified series (e.g., 5090) even though those products exist.

**Solution:**
- We've fixed an issue with series filtering in version 3.12.0 that correctly sets the series property on links
- Make sure your SHOW_ONLY_SERIES value matches the series name exactly:
  ```
  SHOW_ONLY_SERIES=5090
  ```
- Ensure there are no spaces in the value

## Browser and Network Issues

### Protocol Error: Network.enable Timed Out

This is a common error that occurs when the Chrome DevTools Protocol command doesn't complete within the default timeout period.

**Solution:**
- Set a longer protocol timeout in your `dotenv` file:
  ```
  PROTOCOL_TIMEOUT=60000
  ```
- If you're still experiencing issues, try increasing this value further (e.g., 120000 for 2 minutes).
- This setting was added in version 3.11.0 to fix stability issues.

### Captcha Issues

Streetmerchant includes an interactive captcha handler that allows solving captchas remotely. 

**Configuration:**
- Set up a captcha handling service (Discord or Slack):
  ```
  CAPTCHA_HANDLER_SERVICE=discord
  CAPTCHA_HANDLER_TOKEN=your-bot-token
  CAPTCHA_HANDLER_USER_ID=your-user-id
  ```

**Alternative Solutions:**
1. **Run in headful mode:**
   ```
   HEADLESS=false
   ```
   This opens a browser window where you can see and solve captchas manually.

2. **Use your system browser:**
   ```
   PUPPETEER_EXECUTABLE_PATH=/path/to/chrome
   ```
   Use your local Chrome/Chromium installation instead of the bundled one.

## Performance Issues

### High Bandwidth Usage

Streetmerchant can consume significant bandwidth, especially when monitoring multiple stores.

**Solutions:**
1. **Enable low bandwidth mode:**
   ```
   LOW_BANDWIDTH=true
   ```
   This blocks images and fonts to reduce traffic.

2. **Reduce the number of stores being monitored:**
   ```
   STORES=amazon,bestbuy
   ```
   Only include the stores you care most about.

3. **Increase sleep times between checks:**
   ```
   PAGE_SLEEP_MIN=10000
   PAGE_SLEEP_MAX=30000
   ```
   This increases the delay between subsequent checks of the same product.

### Memory Leaks and High CPU Usage

Puppeteer can sometimes use excessive memory when running for extended periods.

**Solutions:**
1. **Set a restart time:**
   ```
   RESTART_TIME=3600000
   ```
   This restarts Chrome every hour (3,600,000 ms).

2. **Reduce concurrent browser instances:**
   ```
   BROWSER_TRUSTED=true
   ```
   This can help reduce resource usage.

## Retailer-specific Issues

### Rate Limiting and IP Bans

Retailers may limit or block IP addresses that make too many requests.

**Solutions:**
1. **Use proxy rotation:**
   Create store-specific proxy files (e.g., `amazon.proxies`) with one proxy per line:
   ```
   http://user:pass@1.2.3.4:8080
   socks5://5.6.7.8:1080
   ```

2. **Increase backoff times:**
   ```
   PAGE_BACKOFF_MIN=60000
   PAGE_BACKOFF_MAX=300000
   ```
   This increases the delay after receiving an access-denied response.

### Nvidia Store Issues

**Solution:**
- For Founders Edition cards in Europe, use the country-specific Nvidia store variable:
  ```
  STORES=nvidia-de
  ```
- For US customers, use Best Buy instead:
  ```
  STORES=bestbuy
  ```

## Notification Issues

If notifications aren't working:

1. **Test notification services:**
   ```bash
   pnpm run test:notification
   ```

2. **Check configuration:**
   - Ensure you've set the necessary environment variables for your notification service
   - Verify tokens and credentials are correct
   - Check if the notification service is available (not down for maintenance)

3. **Logging:**
   - Increase log verbosity:
     ```
     LOG_LEVEL=debug
     ```
   - Check logs for any errors related to notification services

## macOS-specific Issues

### Code Signing Popup

If you're getting a security popup on macOS:

```bash
sudo codesign --force --deep --sign - ./node_modules/puppeteer/.local-chromium/mac-*/chrome-mac/Chromium.app
```

Replace the `mac-*` with the appropriate version installed on your system.

## Docker-specific Issues

### Container Exits Unexpectedly

**Solutions:**
1. **Enable Chromium sandbox bypass:**
   ```
   BROWSER_TRUSTED=true
   ```

2. **Check logs:**
   ```bash
   docker logs streetmerchant
   ```

3. **Increase memory limit:**
   ```bash
   docker run -it --rm --memory=4g --env-file ./dotenv ghcr.io/jef/streetmerchant:latest
   ```

## Getting More Help

If you're still experiencing issues:

1. Check the [GitHub issues](https://github.com/jef/streetmerchant/issues) for similar problems
2. Join the [Discord community](https://discord.gg/gbVY4vB9JF)
3. Create a new issue with detailed information about your problem, including:
   - Your configuration (redact sensitive values)
   - Error logs
   - System specifications
   - Steps to reproduce the issue