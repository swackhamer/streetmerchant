# Using .env File for Streetmerchant Configuration

We've updated the application to ensure it properly uses the `.env` file in the current working directory for all configuration variables, with a focus on properly filtering stores and series.

## Key Improvements

1. **Proper Environment Variable Loading**:
   - The application now correctly loads environment variables from `.env` file in the current working directory
   - Variables defined in `.env` take precedence over system environment variables
   - No shell scripts are needed to load environment variables

2. **Store Filtering**:
   - The application now only launches browsers for stores explicitly configured in the `STORES` variable
   - If `STORES` is not specified, it defaults to a minimal set of stores (amazon, bestbuy)

3. **Series Filtering**:
   - `SHOW_ONLY_SERIES` properly filters product series (e.g., 5090 GPUs)
   - The application respects the series filter throughout the entire product discovery process

## How to Use

Simply create a `.env` file in the application's root directory with your desired configuration:

```
# Store configuration - comma-separated list of stores to check
STORES=bestbuy,newegg

# Series filtering - only check these product series
SHOW_ONLY_SERIES=5090

# Optional: Price limits
MAX_PRICE_SERIES_5090=2500

# Optional: Notification settings
DESKTOP_NOTIFICATIONS=true
OPEN_BROWSER=true
```

Then run the application normally:

```bash
# Compile the application
pnpm run compile

# Run the application
node build/src/index.js
```

The application will:
1. Load all environment variables from the `.env` file
2. Only process the stores specified in `STORES`
3. Only check products from series specified in `SHOW_ONLY_SERIES`
4. Apply any other configuration options specified in the `.env` file

## Testing the Configuration

You can verify your configuration is working correctly by checking the application logs:

```
Loaded environment variables from /path/to/your/.env
SHOW_ONLY_SERIES set to: 5090
STORES set to: bestbuy
Using series filter from environment: 5090
Using stores from .env: bestbuy
Processing 1 configured stores
```

This confirms that:
1. The `.env` file was successfully loaded
2. The application is only checking for 5090 series products
3. The application is only processing the bestbuy store

## Technical Details

The environment variables are loaded in `src/config/index.ts` using the dotenv library with the `override: true` option to ensure variables from `.env` take precedence over system environment variables. The store filtering happens in `src/store/lookup.ts` which ensures browsers are only launched for stores explicitly configured in the STORES variable.

## Conclusion

This solution ensures that all configuration is handled through the `.env` file in the current working directory, making the application more efficient by only checking the products you're interested in at the stores you want to purchase from. No shell scripts or custom loaders are needed for the application to correctly respect your environment settings.