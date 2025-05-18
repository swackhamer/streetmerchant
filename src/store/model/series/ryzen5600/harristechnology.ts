import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for harristechnology ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.ht.com.au/part/CA093-AMD-Ryzen-5-5600X-6-Core-3.7-GHz-Desktop-Processor-with-AM4-Socket-65W-Thermal-Design-Power/detail.hts',
    },
  ]),
];
