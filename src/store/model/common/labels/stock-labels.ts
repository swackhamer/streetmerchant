/**
 * Stock status label definitions
 */

/**
 * Standard in-stock label patterns by category
 */
export const inStockLabels = {
  // Common patterns for add to cart buttons
  addToCart: {
    container: '.add-to-cart',
    text: ['add to cart', 'add to bag', 'buy now'],
  },
  amazonAddToCart: {
    container: '#add-to-cart-button',
    text: ['add to cart'],
  },
  bestbuyAddToCart: {
    container: '.add-to-cart-button',
    text: ['add to cart']
  },
  neweggAddToCart: {
    container: '.product-buy',
    text: ['add to cart']
  },
  // European variations
  euroAddToCart: {
    container: '.add-to-cart',
    text: ['add to basket', 'add to cart', 'in den warenkorb', 'ajouter au panier', 'añadir a la cesta']
  },
  // Patterns for availability messages
  available: {
    container: '.availability',
    text: ['in stock', 'available', 'in store'],
  },
  // Patterns for button states
  buttonEnabled: {
    container: 'button:not([disabled])',
    text: ['add to cart', 'buy now'],
  },
};

/**
 * Standard out-of-stock label patterns by category
 */
export const outOfStockLabels = {
  // Common out of stock messages
  standard: {
    container: '.availability',
    text: ['out of stock', 'sold out', 'unavailable'],
  },
  amazonOutOfStock: [
    {
      container: '#availability',
      text: ['currently unavailable']
    },
    {
      container: '#outOfStock',
      text: ['unavailable']
    }
  ],
  bestbuyOutOfStock: {
    container: '.add-to-cart-button',
    text: ['sold out']
  },
  neweggOutOfStock: {
    container: '.product-inventory',
    text: ['out of stock']
  },
  // European variations
  euroOutOfStock: {
    container: '.availability',
    text: ['out of stock', 'sold out', 'ausverkauft', 'en rupture', 'agotado', 'non disponibile']
  },
  // Pre-order patterns
  preOrder: {
    container: '.availability',
    text: ['pre-order', 'coming soon', 'notify me'],
  },
  // Button states indicating out of stock
  buttonDisabled: {
    container: 'button[disabled]',
    text: ['add to cart', 'buy now'],
  },
};