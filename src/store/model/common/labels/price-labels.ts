/**
 * Price label definitions
 */

/**
 * Common price selector patterns
 */
export const pricingLabels = {
  // Standard price containers
  standard: {
    container: '.price',
    euroFormat: false,
  },
  amazonPrice: {
    container: '#priceblock_ourprice',
    euroFormat: false
  },
  bestbuyPrice: {
    container: '.priceView-customer-price span',
    euroFormat: false
  },
  neweggPrice: {
    container: '.price-current',
    euroFormat: false
  },
  // Euro-formatted prices
  euro: {
    container: '.price',
    euroFormat: true,
  },
  amazonEuroPrice: {
    container: '#priceblock_ourprice',
    euroFormat: true
  },
  // Sale prices
  sale: {
    container: '.sale-price',
    euroFormat: false,
  },
};