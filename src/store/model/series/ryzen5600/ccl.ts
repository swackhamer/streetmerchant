import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for ccl ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.cclonline.com/product/331765/100-100000065BOX/CPU-Processors/AMD-Ryzen-5-5600X-3-7GHz-Hexa-Core-Processor-with-6-Cores-12-Threads-65W-TDP-35MB-Cache-4-6GHz-Turbo-Wraith-Stealth-Cooler/CPU0679/',
    },
  ]),
];
