import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bandh sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '750 platinum',
      url: 'https://www.bhphotovideo.com/c/product/1560680-REG/corsair_cp_9020186_na_corsair_sf750_power_supply.html',
    },
  ]),
];
