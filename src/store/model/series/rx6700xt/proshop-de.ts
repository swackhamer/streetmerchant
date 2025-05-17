import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for proshop-de rx6700xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.proshop.de/2931749',
    },
    {
      model: 'dual',
      url: 'https://www.proshop.de/2931751',
    },
    {
      model: 'tuf oc',
      url: 'https://www.proshop.de/2928902',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.de/2928906',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.proshop.de/2931754',
    },
    {
      model: 'eagle',
      url: 'https://www.proshop.de/2929320',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.de/2929323',
    },
    {
      model: 'aorus elite',
      url: 'https://www.proshop.de/2929319',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'mech 2x',
      url: 'https://www.proshop.de/2929317',
    },
    {
      model: 'mech 2x oc',
      url: 'https://www.proshop.de/2929318',
    },
    {
      model: 'gaming x',
      url: 'https://www.proshop.de/2929316',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.proshop.de/2931748',
    },
    {
      model: 'fighter',
      url: 'https://www.proshop.de/2930939',
    },
    {
      model: 'hellhound',
      url: 'https://www.proshop.de/2930940',
    },
    {
      model: 'red devil',
      url: 'https://www.proshop.de/2930941',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'pulse',
      url: 'https://www.proshop.de/2935127',
    },
    {
      model: 'pulse',
      url: 'https://www.proshop.de/2987327',
    },
    {
      model: 'nitro+',
      url: 'https://www.proshop.de/2935128',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6700xt', [
    {
      model: 'merc',
      url: 'https://www.proshop.de/2934180',
    },
    {
      model: 'qick ultra',
      url: 'https://www.proshop.de/2934182',
    },
    {
      model: 'qick',
      url: 'https://www.proshop.de/2954595',
    },
  ]),

];
