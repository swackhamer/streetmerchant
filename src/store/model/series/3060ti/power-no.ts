import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for power-no 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-geforce-rtx-3060-ti-oc-edition-grafikkort/p-1132911/',
    },
    {
      model: 'dual',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-dual-rtx-3060-ti-mini-8-gb-grafikkort/p-1141086/',
    },
    {
      model: 'tuf',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-geforce-rtx-3060-ti-grafikkort/p-1132912/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3060-ti-oc-edition-grafikkort/p-1132909/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'strix',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3060-ti-grafikkort/p-1132910/',
    },
  ]),
];
