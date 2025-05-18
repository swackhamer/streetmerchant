import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for azerty 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus xtreme',
      url: 'https://azerty.nl/product/gigabyte/4349658/aorus-geforce-rtx-3080-xtreme-10g-grafische-kaart-gf-rtx-3080',
    },
    {
      model: 'aorus master',
      url: 'https://azerty.nl/product/gigabyte/4349651/aorus-geforce-rtx-3080-master-10g-grafische-kaart-gf-rtx-3080',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://azerty.nl/product/msi/4346262/geforce-rtx-3080-ventus-3x-10g-oc-grafische-kaart-rtx-3080',
    },
    {
      model: 'gaming x trio',
      url: 'https://azerty.nl/product/msi/4346263/geforce-rtx-3080-gaming-x-trio-10g-grafische-kaart-rtx-3080',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://azerty.nl/product/asus/4346679/tuf-gaming-geforce-rtx-3080-grafische-kaart-gf-rtx-3080',
    },
    {
      model: 'tuf oc',
      url: 'https://azerty.nl/product/asus/4348176/tuf-gaming-geforce-rtx-3080-oc-grafische-kaart-gf-rtx-3080',
    },
    {
      model: 'strix oc',
      url: 'https://azerty.nl/product/asus/4348174/rog-strix-geforce-rtx-3080-oc-grafische-kaart-gf-rtx-3080',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://azerty.nl/product/zotac/4352301/gaming-geforce-rtx-3080-trinity-oc-grafische-kaart-gf-rtx-3080',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://azerty.nl/product/pny/4342269/geforce-rtx-3080-xlr8-gaming-revel-epic-x-rgb-triple-fan-gaming-edition-grafische-kaart-gf-rtx-3080',
    },
  ]),
];
