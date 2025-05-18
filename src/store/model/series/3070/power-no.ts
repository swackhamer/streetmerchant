import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for power-no 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'tuf oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-rtx-3070-oc-8gb/p-1135069/',
    },
    {
      model: 'strix oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-rtx-3070-oc-8gb/p-1135068/',
    },
    {
      model: 'dual',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-dual-geforce-rtx-3070-8-gb-grafikkort/p-1117757/',
    },
    {
      model: 'strix',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3070-8-gb-grafikkort/p-1117756/',
    },
    {
      model: 'tuf',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-geforce-rtx-3070-8-gb-grafikkort/p-1130029/',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 uprising',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/pny-geforce-rtx-3070-8-gb-uprising-dual-fan-edition-grafikkort/p-1128969/',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/pny-geforce-rtx-3070-8-gb-xlr8-gaming-revel-epic-x-rgb-triple-fan-edition-grafikkort/p-1128970/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3070-8-gb-ventus-3x-oc-grafikkort/p-1147092/',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3070-ventus-2x-oc-grafikkort/p-1145752/',
    },
  ]),
];
