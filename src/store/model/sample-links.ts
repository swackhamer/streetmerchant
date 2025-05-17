/**
 * Sample links for testing the centralized data store
 */
import {seriesData} from './series-data';
import {Link, Brand, Model, Series} from './store';

// Sample NVIDIA RTX 3080 links for BestBuy
const bestbuy3080Links: Link[] = [
  {
    brand: 'nvidia',
    model: 'founders edition',
    series: '3080',
    url: 'https://api.bestbuy.com/click/-/6429440/pdp',
    cartUrl: 'https://api.bestbuy.com/click/-/6429440/cart',
  },
  {
    brand: 'evga',
    model: 'xc3 black',
    series: '3080',
    url: 'https://api.bestbuy.com/click/-/6432400/pdp',
    cartUrl: 'https://api.bestbuy.com/click/-/6432400/cart',
  },
  {
    brand: 'msi',
    model: 'ventus 3x',
    series: '3080',
    url: 'https://api.bestbuy.com/click/-/6430175/pdp',
    cartUrl: 'https://api.bestbuy.com/click/-/6430175/cart',
  }
];

// Sample AMD Ryzen 5950X links
const amdRyzenLinks: Link[] = [
  {
    brand: 'amd',
    model: 'amd reference', // Using a valid model from the enum
    series: 'ryzen5950',
    url: 'https://www.amd.com/en/direct-buy/us/5450881500',
  },
  {
    brand: 'amd',
    model: 'amd reference', // Using a valid model from the enum
    series: 'ryzen5900',
    url: 'https://www.amd.com/en/direct-buy/us/5450881400',
  }
];

// Sample PlayStation 5 links
const ps5Links: Link[] = [
  {
    brand: 'sony' as Brand,
    model: 'playstation 5 digital edition' as Model,
    series: 'sonyps5de' as Series,
    url: 'https://api.bestbuy.com/click/-/6430161/pdp',
    cartUrl: 'https://api.bestbuy.com/click/-/6430161/cart',
  },
  {
    brand: 'sony' as Brand,
    model: 'playstation 5 console' as Model,
    series: 'sonyps5c' as Series,
    url: 'https://api.bestbuy.com/click/-/6426149/pdp',
    cartUrl: 'https://api.bestbuy.com/click/-/6426149/cart',
  }
];

/**
 * Adds sample links to the centralized data store for testing
 */
export function addSampleLinks(): void {
  console.log('Adding sample links to centralized data store...');
  
  // Add BestBuy RTX 3080 links
  if (!seriesData['3080']) {
    seriesData['3080'] = {};
  }
  
  if (!seriesData['3080']['bestbuy']) {
    seriesData['3080']['bestbuy'] = [];
  }
  
  seriesData['3080']['bestbuy'] = bestbuy3080Links;
  
  // Add AMD Ryzen links
  for (const link of amdRyzenLinks) {
    const series = link.series;
    
    if (!seriesData[series]) {
      seriesData[series] = {};
    }
    
    if (!seriesData[series]['amd']) {
      seriesData[series]['amd'] = [];
    }
    
    seriesData[series]['amd'].push(link);
  }
  
  // Add PlayStation 5 links
  for (const link of ps5Links) {
    const series = link.series;
    
    if (!seriesData[series]) {
      seriesData[series] = {};
    }
    
    if (!seriesData[series]['bestbuy']) {
      seriesData[series]['bestbuy'] = [];
    }
    
    seriesData[series]['bestbuy'].push(link);
  }
  
  console.log('Sample links added successfully.');
}