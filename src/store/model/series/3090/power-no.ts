import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for power-no 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3090-oc-edition-24-gb-grafikkort/p-1128962/',
    },
    {
      model: 'strix',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-rog-strix-geforce-rtx-3090-24-gb-grafikkort/p-1117754/',
    },
    {
      model: 'tuf',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/asus-tuf-gaming-geforce-rtx-3090-24-gb-grafikkort/p-1115922/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'suprim x',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3090-suprim-x-24g-grafikkort/p-1145754/',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3090-24-gb-ventus-3x-oc-grafikkort/p-1118422/',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/msi-geforce-rtx-3090-24-gb-gaming-x-trio-grafikkort/p-1118421/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus xtreme',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-gf-rtx-3090-aorus-xtreme-24-gb-grafikkort/p-1141935/',
    },
    {
      model: 'aorus master',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-gf-rtx-3090-aorus-master-24-gb-grafikkort/p-1141934/',
    },
    {
      model: 'turbo',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3090-turbo-24-gb-grafikkort/p-1141933/',
    },
    {
      model: 'vision oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3090-vision-oc-24-gb-grafikkort/p-1141932/',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-rtx-3090-aorus-xtreme-wf-24-gb-grafikkort/p-1141931/',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-aorus-geforce-rtx-3090-xtreme-waterforce-wb-24-gb-grafikkort/p-1141930/',
    },
    {
      model: 'aorus master',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-aorus-geforce-rtx-3090-master-24-gb-grafikkort/p-1121304/',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-aorus-geforce-rtx-3090-xtreme-24-gb-grafikkort/p-1121303/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3090-24-gb-gaming-oc-grafikkort/p-1118418/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/gigabyte-geforce-rtx-3090-24-gb-eagle-oc-grafikkort/p-1118417/',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 revel',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/pny-geforce-rtx-3090-24-gb-xlr8-gaming-revel-epic-x-rgb-triple-fan-edition-grafikkort/p-1128967/',
    },
    {
      model: 'xlr8 uprising',
      url: 'https://www.power.no/data-og-tilbehoer/datakomponenter/grafikkort/pny-geforce-rtx-3090-24-gb-xlr8-gaming-uprising-epic-x-rgb-triple-fan-edition-grafikkort/p-1128966/',
    },
  ]),
];
