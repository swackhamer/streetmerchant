import {Link} from '../store';

/**
 * Link template for a specific store and series
 * 
 * How to use this template:
 * 1. Create a directory structure for your series if it doesn't exist
 *    - e.g., src/store/model/series/3080/
 * 2. Copy this file into that directory and name it after your store
 *    - e.g., src/store/model/series/3080/mystore.ts
 * 3. Replace the placeholder links with actual product links
 */
export const links: Link[] = [
  // Example link structure - replace with your actual links
  {
    brand: 'nvidia', // The brand of the product (e.g., 'nvidia', 'evga', 'amd')
    model: 'founders edition', // The model of the product (e.g., 'founders edition', 'strix', 'gaming x trio')
    series: '3080', // The series of the product - IMPORTANT: This must match the directory name
    url: 'https://store.example.com/product/nvidia-3080-founders-edition', // The product URL
    
    // Optional: The URL to add the product directly to cart
    // cartUrl: 'https://store.example.com/add-to-cart/nvidia-3080',
    
    // Optional: The item number/SKU for the product (for stores that support it)
    // itemNumber: 'SKU123456',
    
    // Optional: Override the global price if needed
    // price: 699,
  },
  
  // Add more links for this store and series
  {
    brand: 'evga',
    model: 'ftw3 ultra',
    series: '3080',
    url: 'https://store.example.com/product/evga-3080-ftw3-ultra',
  },
  
  // Example with a cart URL
  {
    brand: 'asus',
    model: 'strix oc',
    series: '3080',
    url: 'https://store.example.com/product/asus-3080-strix-oc',
    cartUrl: 'https://store.example.com/add-to-cart/asus-3080-strix-oc',
  },
  
  // Example with an item number
  {
    brand: 'gigabyte',
    model: 'aorus master',
    series: '3080',
    url: 'https://store.example.com/product/gigabyte-3080-aorus-master',
    itemNumber: 'GV-N3080AORUS-M-10GD',
  },
];