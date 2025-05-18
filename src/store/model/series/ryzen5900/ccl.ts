import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for ccl ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.cclonline.com/product/331767/100-100000061WOF/CPU-Processors/AMD-Ryzen-9-5900X-3-7GHz-Dodeca-Core-Processor-with-12-Cores-24-Threads-105W-TDP-70MB-Cache-4-8GHz-Turbo-No-Cooler/CPU0681/',
    },
  ]),
];
