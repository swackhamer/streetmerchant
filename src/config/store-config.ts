import {envOrArray, envOrBoolean, envOrNumber, envOrString} from './env-utils';
import {readFileSync} from 'fs';
import chalk from 'chalk';

/**
 * Loads proxy list from a file
 * @param filename The name of the proxy list file
 * @returns Array of proxy strings or undefined if file not found
 */
function loadProxyList(filename: string): string[] | undefined {
  try {
    return readFileSync(`${filename}.proxies`)
      .toString()
      .trim()
      .split('\n')
      .map(x => x.trim());
  } catch {
    return undefined;
  }
}

export const store = {
  // Only use value directly from environment variable with no default
  autoAddToCart: envOrBoolean(process.env.AUTO_ADD_TO_CART),

  // No default country - only use what's in .env
  country: envOrString(process.env.COUNTRY),

  maxPrice: {
    series: {
      3050: envOrNumber(process.env.MAX_PRICE_SERIES_3050),
      3060: envOrNumber(process.env.MAX_PRICE_SERIES_3060),
      '3060ti': envOrNumber(process.env.MAX_PRICE_SERIES_3060TI),
      3070: envOrNumber(process.env.MAX_PRICE_SERIES_3070),
      '3070ti': envOrNumber(process.env.MAX_PRICE_SERIES_3070TI),
      3080: envOrNumber(process.env.MAX_PRICE_SERIES_3080),
      '3080ti': envOrNumber(process.env.MAX_PRICE_SERIES_3080TI),
      3090: envOrNumber(process.env.MAX_PRICE_SERIES_3090),
      4060: envOrNumber(process.env.MAX_PRICE_SERIES_4060),
      4070: envOrNumber(process.env.MAX_PRICE_SERIES_4070),
      '4070super': envOrNumber(process.env.MAX_PRICE_SERIES_4070SUPER),
      '4070ti': envOrNumber(process.env.MAX_PRICE_SERIES_4070TI),
      '4080-16g': envOrNumber(process.env.MAX_PRICE_SERIES_4080_16G),
      4090: envOrNumber(process.env.MAX_PRICE_SERIES_4090),
      5070: envOrNumber(process.env.MAX_PRICE_SERIES_5070),
      '5070ti': envOrNumber(process.env.MAX_PRICE_SERIES_5070TI),
      5080: envOrNumber(process.env.MAX_PRICE_SERIES_5080),
      5090: envOrNumber(process.env.MAX_PRICE_SERIES_5090),
      arc: envOrNumber(process.env.MAX_PRICE_SERIES_ARC),
      'a3-matx': envOrNumber(process.env.MAX_PRICE_SERIES_A3_MATX),
      'captcha-deterrent': 0,
      darkhero: envOrNumber(process.env.MAX_PRICE_SERIES_DARKHERO),
      'g4-doorbell-pro': envOrNumber(process.env.MAX_PRICE_SERIES_G4_DOORBELL_PRO),
      rx6700xt: envOrNumber(process.env.MAX_PRICE_SERIES_RX6700XT),
      rx6800: envOrNumber(process.env.MAX_PRICE_SERIES_RX6800),
      rx6800xt: envOrNumber(process.env.MAX_PRICE_SERIES_RX6800XT),
      rx6900xt: envOrNumber(process.env.MAX_PRICE_SERIES_RX6900XT),
      rx9070: envOrNumber(process.env.MAX_PRICE_SERIES_RX9070),
      rx9070xt: envOrNumber(process.env.MAX_PRICE_SERIES_RX9070XT),
      ryzen5600: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5600),
      ryzen5800: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5800),
      ryzen5900: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5900),
      ryzen5950: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5950),
      ryzen7950x: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN7950X),
      ryzen7800x3d: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN7800X3D),
      ryzen9800x3d: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN9800X3D),
      ryzen9600x: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN9600X),
      ryzen9700x: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN9700X),
      ryzen9900x: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN9900X),
      ryzen9950x: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN9950X),
      ryzen9950x3d: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN9950X3D),
      sf: envOrNumber(process.env.MAX_PRICE_SERIES_CORSAIR_SF),
      sonyps5c: envOrNumber(process.env.MAX_PRICE_SERIES_SONYPS5C),
      sonyps5de: envOrNumber(process.env.MAX_PRICE_SERIES_SONYPS5DE),
      'test:series': envOrNumber(process.env.MAX_PRICE_SERIES_TEST),
      'udm-pro': envOrNumber(process.env.MAX_PRICE_SERIES_UDM_PRO),
      'udm-us': envOrNumber(process.env.MAX_PRICE_SERIES_UDM_US),
      'udr-us': envOrNumber(process.env.MAX_PRICE_SERIES_UDR_US),
      unvr: envOrNumber(process.env.MAX_PRICE_SERIES_UNVR),
      'unvr-pro': envOrNumber(process.env.MAX_PRICE_SERIES_UNVR_PRO),
      xboxss: envOrNumber(process.env.MAX_PRICE_SERIES_XBOXSS),
      xboxsx: envOrNumber(process.env.MAX_PRICE_SERIES_XBOXSX),
    },
  },
  // No default location - only use what's in .env
  microCenterLocation: envOrArray(process.env.MICROCENTER_LOCATION),

  showOnlyBrands: envOrArray(process.env.SHOW_ONLY_BRANDS),
  showOnlyModels: envOrArray(process.env.SHOW_ONLY_MODELS).map(entry => {
    const [name, series] = entry.match(/[^:]+/g) ?? [];
    return {
      name: envOrString(name),
      series: envOrString(series),
    };
  }),
  // No default series - only use what's in .env
  showOnlySeries: (() => {
    const series = envOrArray(process.env.SHOW_ONLY_SERIES);
    if (process.env.NODE_ENV !== 'test') {
      console.log(
        chalk.blue('[DEBUG-CONFIG]'),
        `Parsed SHOW_ONLY_SERIES: ${chalk.cyan(JSON.stringify(series))}`
      );
    } else {
      console.log('[DEBUG-CONFIG] Parsed SHOW_ONLY_SERIES:', JSON.stringify(series));
    }
    return series;
  })(),
  showOnlyCountry: envOrArray(process.env.SHOW_ONLY_COUNTRY),

  // No default stores - only use what's explicitly defined in .env STORES variable
  stores: (process.env.STORES
    ? // Parse STORES env var (could be comma-separated list of stores,
      // potentially with sleep parameters in the format "storename,min:max")
      (() => {
        const storeConfigs = [];
        const entries = process.env.STORES.split(',');

        // The expected format could be either:
        // 1. "store1,store2,store3" (simple comma-separated list)
        // 2. "store1,min:max" (store with sleep params)
        // 3. "store1,store2:min:max" (multiple stores, some with params)

        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i].trim();

          // If the entry contains a colon, it might be sleep parameters
          if (entry.includes(':')) {
            // Check if this is a sleep parameter for the previous store
            // This handles the case "bestbuy,1000000:3000000" where 1000000:3000000 are sleep params for bestbuy
            if (!isNaN(Number(entry.split(':')[0])) && i > 0) {
              // This is likely a sleep parameter for the previous store
              const prevStore = storeConfigs[storeConfigs.length - 1];
              const sleepParams = entry.split(':');

              // Update previous store's sleep parameters
              prevStore.minPageSleep = sleepParams[0];
              prevStore.maxPageSleep = sleepParams.length > 1 ? sleepParams[1] : undefined;

              // Skip to next entry since we processed this as parameters
              continue;
            } else {
              // This is a store name with embedded sleep parameters
              const parts = entry.split(':');
              storeConfigs.push({
                name: parts[0],
                minPageSleep: parts[1],
                maxPageSleep: parts.length > 2 ? parts[2] : undefined,
              });
            }
          } else {
            // Just a regular store name
            storeConfigs.push({
              name: entry,
              minPageSleep: undefined,
              maxPageSleep: undefined,
            });
          }
        }

        return storeConfigs;
      })()
    : // Otherwise use an empty array (no stores)
      []
  ).map(entry => {
    const {name, minPageSleep, maxPageSleep} = entry;

    if (process.env.NODE_ENV !== 'test') {
      console.info(chalk.green(`Configuring store: ${chalk.bold.yellow(name)}`));
    } else {
      console.info(`Configuring store: ${name}`);
    }

    let proxyList = loadProxyList(name as string);

    if (!proxyList) {
      proxyList = envOrArray(process.env.PROXY_LIST);
      if (proxyList.length === 0) {
        proxyList = undefined;
      }
    }

    if (!proxyList) {
      proxyList = loadProxyList('global');
    }

    // Don't use default values for page sleep times
    return {
      maxPageSleep: envOrNumberMax(minPageSleep, maxPageSleep, 0),
      minPageSleep: envOrNumberMin(minPageSleep, maxPageSleep, 0),
      name: envOrString(name),
      proxyList,
    };
  }),
};

// Helper functions for min/max number handling
function envOrNumberMin(
  environmentMin: string | undefined,
  environmentMax: string | undefined,
  number?: number
) {
  if (environmentMin || environmentMax) {
    if (environmentMin && environmentMax) {
      return Number(
        Number(environmentMin) < Number(environmentMax) ? environmentMin : environmentMax
      );
    }

    if (environmentMax) {
      return Number(environmentMax) < (number ?? 0) ? Number(environmentMax) : number ?? 0;
    }

    if (environmentMin) {
      return Number(environmentMin);
    }
  }

  return number ?? 0;
}

function envOrNumberMax(
  environmentMin: string | undefined,
  environmentMax: string | undefined,
  number?: number
) {
  if (environmentMin || environmentMax) {
    if (environmentMin && environmentMax) {
      return Number(
        Number(environmentMin) < Number(environmentMax) ? environmentMax : environmentMax
      );
    }

    if (environmentMin) {
      return Number(environmentMin) > (number ?? 0) ? Number(environmentMin) : number ?? 0;
    }

    if (environmentMax) {
      return Number(environmentMax);
    }
  }

  return number ?? 0;
}
