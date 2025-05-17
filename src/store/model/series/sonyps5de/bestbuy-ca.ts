import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bestbuy-ca sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 console',
      url: 'https://www.bestbuy.ca/en-ca/product/playstation-5-digital-edition-console-online-only/14962184?intl=nosplash',
    },
  ]),

];
