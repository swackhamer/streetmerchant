import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for futurex rx6700xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'aorus elite',
      url: 'https://www.future-x.de/gigabyte-radeon-rx6700xt-aorus-elite-12gb-gddr6-2xhdmi-2xd-12288-mb-p-8808313',
    },
    {
      model: 'gaming oc',
      url: 'https://www.future-x.de/gigabyte-radeon-rx-6700-xt-gaming-oc-12gb-gddr6-2xdp-1xhdmi-grafikkarte-12288-mb-p-8787855/',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'nitro+',
      url: 'https://www.future-x.de/sapphire-amd-radeon-rx-6700-xt-gaming-oc-12gb-gddr6-hdmi-12288-mb-p-8808436/',
    },
  ]),
];
