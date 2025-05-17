import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for saveonit rx6900xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6900xt', [
    {
      model: 'phantom gaming',
      url: 'https://www.saveonit.com.au/product/asrock-rx6900xt-pgd-16go-rx6900xt-16g-phantom-gaming-d',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.saveonit.com.au/product/gigabyte-gv-r69xt-16gc-b-rx6900xt-16gb-video-card',
    },
  ]),

];
