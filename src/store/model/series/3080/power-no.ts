import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for power-no 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.power.no/data-og-tilbehoer/p-1118420/',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.power.no/data-og-tilbehoer/p-1118419/',
    },
    {
      model: 'suprim x',
      url: 'https://www.power.no/data-og-tilbehoer/p-1145753/',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3080-10-gb-ventus-3x-oc-grafikkort/p-1118420/',
    },
    {
      model: 'suprim x',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3080-suprim-x-10g-grafikkort/p-1145753/',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.power.no/data-og-tilbehoer/p-1115923/',
    },
    {
      model: 'strix',
      url: 'https://www.power.no/data-og-tilbehoer/p-1117755/',
    },
    {
      model: 'tuf',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-geforce-rtx-3080-10-gb-grafikkort/p-1115923/',
    },
    {
      model: 'strix',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3080-10-gb-grafikkort/p-1117755/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus xtreme',
      url: 'https://www.power.no/data-og-tilbehoer/p-1141929/',
    },
    {
      model: 'eagle',
      url: 'https://www.power.no/data-og-tilbehoer/p-1141928/',
    },
    {
      model: 'vision oc',
      url: 'https://www.power.no/data-og-tilbehoer/p-1121308/',
    },
    {
      model: 'aorus master',
      url: 'https://www.power.no/data-og-tilbehoer/p-1121307/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.power.no/data-og-tilbehoer/p-1118416/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.power.no/data-og-tilbehoer/p-1118415/',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-gf-rtx-3080-aorus-xtreme-10-gb-grafikkort/p-1141929/',
    },
    {
      model: 'eagle',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3080-eagle-10-gb-grafikkort/p-1141928/',
    },
    {
      model: 'vision oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3080-vision-oc-10-gb-grafikkort/p-1121308/',
    },
    {
      model: 'aorus master',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-aorus-geforce-rtx-3080-master-10-gb-grafikkort/p-1121307/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3080-10-gb-gaming-oc-grafikkort/p-1118416/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3080-10-gb-eagle-oc-grafikkort/p-1118415/',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.power.no/data-og-tilbehoer/p-1128968/',
    },
    {
      model: 'xlr8 uprising',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/pny-geforce-rtx-3080-10-gb-xlr8-gaming-uprising-epic-x-rgb-triple-fan-edition-grafikkort/p-1128968/',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/pny-geforce-rtx-3080-10-gb-xlr8-gaming-revel-epic-x-rgb-triple-fan-edition-grafikkort/p-1128965/',
    },
  ]),
];
