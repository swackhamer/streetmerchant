# RTX 5090 Series Support

Streetmerchant includes full support for monitoring the latest NVIDIA GeForce RTX 5090 graphics cards across multiple retailers.

> **Update**: We've implemented significant improvements to the store configuration and series filtering system. The application now properly loads and filters RTX 5090 series links from all configured stores.

## Supported Retailers for RTX 5090

The following retailers are currently supported for RTX 5090 tracking:

- ASUS Official Store
- B&H Photo
- Best Buy (US)
- Best Buy (Canada)
- MSI Store
- Newegg
- NVIDIA UK Store
- PNY
- Zotac Store

## Configuration

To set up Streetmerchant for RTX 5090 tracking:

1. Edit your `.env` or `dotenv` file
2. Set the following options:

```
# Focus only on 5090 series
SHOW_ONLY_SERIES=5090

# Set maximum price (in your local currency)
MAX_PRICE_SERIES_5090=2500

# Configure specific stores for 5090
# Format: storename:min_sleep:max_sleep
STORES=amazon:10000:30000,bestbuy,newegg:50000:80000,asus:10000:30000,bandh:10000:30000,msi:10000:30000,nvidia-gb:10000:30000,pny:10000:30000,zotac:10000:30000
```

The store format uses `:` to separate the store name from the minimum and maximum sleep times between checks (in milliseconds). This helps prevent rate limiting. If no sleep times are specified (e.g., `bestbuy`), default values will be used.

## Available Models

Streetmerchant currently tracks the following RTX 5090 models:

### ASUS Models
- TUF Gaming (Standard and OC Editions)
- ROG Astral (Air-cooled)
- ROG Astral LC (Liquid-cooled)

### Founders Edition
- NVIDIA RTX 5090 Founders Edition (Best Buy and NVIDIA UK)

### Gigabyte Models
- AORUS Master
- Gaming OC
- Windforce OC
- Master Ice (AIO Liquid Cooled)

### MSI Models
- Gaming Trio OC

### PNY Models
- XLR8
- XLR8 VERTO

### Zotac Models
- AMP Extreme
- Trinity

## Price Alerts

When configuring `MAX_PRICE_SERIES_5090`, set a realistic limit based on current market prices. For the RTX 5090, a reasonable price cap is typically between $2000-2500 USD.

## Discord Notifications

For Discord notification setup with specific RTX 5090 alerts:

```
DISCORD_NOTIFY_GROUP_5090=@rtx5090alerts
```

This will tag the specified role or user when an RTX 5090 card is found.

## Adding More Retailers

The modular architecture of Streetmerchant makes it easy to add more retailers as they begin stocking RTX 5090 cards. Check the [Adding a New Store](adding-a-new-store.md) documentation for details on how to contribute additional retailer support.