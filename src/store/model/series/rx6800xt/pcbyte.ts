import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pcbyte rx6800xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800xt', [
    {
      model: 'taichi',
      url: 'https://www.pcbyte.com.au/store/product/asrock-amd-radeon-rx-6800-xt-taichi-x-16g-oc-video-card-rx6800xt-tcx-16go-78693',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.pcbyte.com.au/store/product/asrock-amd-radeon-rx-6800-xt-phantom-gaming-d-16g-oc-video-card-rx6800xt-pgd-16go-78692',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'gaming oc',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-xt-gaming-oc-16gb-video-card-gv-r68xtgaming-oc-16gd-78453',
    },
    {
      model: 'aorus master',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-xt-aorus-master-16g-video-card-gv-r68xtaorus-m-16gd-151405',
    },
    {
      model: 'aorus master type-c',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-xt-aorus-master-type-c-16g-video-card-gv-r68xtaorus-m-16gc-151404',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'gaming x trio',
      url: 'https://www.pcbyte.com.au/store/product/msi-amd-radeon-rx-6800-xt-gaming-x-trio-16gb-video-card-152871',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'nitro+ se',
      url: 'https://www.pcbyte.com.au/store/product/sapphire-amd-radeon-rx-6800-xt-nitro-se-16gb-video-card-11304-01-20g-185859',
    },
  ]),
];
