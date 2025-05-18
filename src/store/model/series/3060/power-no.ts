import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for power-no 3060 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'dual',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-dual-geforce-rtx-3060-ti-grafikkort/p-1132914/',
    },
    {
      model: 'dual',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-dual-rtx-3060-ti-mini-oc-8-gb-grafikkort/p-1141085/',
    },
    {
      model: 'dual',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-dual-geforce-rtx-3060-12-gb-grafikkort/p-1167374/',
    },
    {
      model: 'dual oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-dual-geforce-rtx-3060-12-gb-oc-edition-grafikkort/p-1167373/',
    },
    {
      model: 'tuf',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-geforce-rtx-3060-12-gb-grafikkort/p-1167372/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-geforce-rtx-3060-12-gb-oc-edition-grafikkort/p-1167371/',
    },
    {
      model: 'strix',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3060-12-gb-grafikkort/p-1167370/',
    },
    {
      model: 'strix oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3060-12-gb-oc-edition-grafikkort/p-1167369/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'gaming x trio',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3060-gaming-x-trio-12-gb-grafikkort/p-1163157/',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3060-gaming-x-12-gb-grafikkort/p-1163156/',
    },
  ]),
];
