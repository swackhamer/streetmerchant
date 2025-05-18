import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for awd ryzen9950x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9950x3d', [
    {
      model: '9950x3d',
      url: 'https://www.awd-it.co.uk/amd-ryzen-9-9950x3d-16-core-socket-am5-5-7ghz-3d-v-cache-processor-100-100000719wof.html',
    },
  ]),
];
