/**
 * Data store for series product links
 *
 * This file contains the central repository of product links organized by series and store.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type {Link, Series} from '../store';
import {SeriesData} from './types';

/**
 * Central repository for product links organized by series and store
 */
export const seriesData: SeriesData = {
  '3080': {
    bestbuy: [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3080',
        url: 'https://api.bestbuy.com/click/-/6429440/pdp',
      },
    ],
    amazon: [
      {
        brand: 'asus',
        model: 'tuf',
        series: '3080',
        url: 'https://www.amazon.com/dp/B08HH5WF97',
      },
    ],
  },
  '3070': {
    bestbuy: [
      {
        brand: 'nvidia',
        model: 'founders edition',
        series: '3070',
        url: 'https://api.bestbuy.com/click/-/6429442/pdp',
      },
    ],
  },
};
