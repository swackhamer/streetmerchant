import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for azerty 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix oc',
      url: 'https://azerty.nl/product/asus/4363892/rog-strix-gaming-geforce-rtx-3070-o8g-videokaart-8-gb-gddr6',
    },
    {
      model: 'strix',
      url: 'https://azerty.nl/product/asus/4373096/rog-strix-gaming-geforce-rtx-3070-8g-videokaart-8-gb-gddr6',
    },
    {
      model: 'tuf oc',
      url: 'https://azerty.nl/product/asus/4363910/tuf-gaming-geforce-rtx-3070-oc-videokaart-8-gb-gddr6',
    },
    {
      model: 'tuf',
      url: 'https://azerty.nl/product/asus/4373099/tuf-gaming-geforce-rtx-3070-videokaart-8-gb-gddr6',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x4',
      url: 'https://azerty.nl/product/inno3d/4369725/geforce-rtx-3070-ichill-x4-videokaart-8-gb-ddr6',
    },
    {
      model: 'ichill x3',
      url: 'https://azerty.nl/product/inno3d/4369726/geforce-rtx-3070-ichill-x3-videokaart-8-gb-ddr6',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 3x oc',
      url: 'https://azerty.nl/product/msi/4374747/geforce-rtx-3070-ventus-3x-oc-videokaart-8-gb-gddr6',
    },
    {
      model: 'gaming x trio',
      url: 'https://azerty.nl/product/msi/4365398/geforce-rtx-3070-gaming-x-trio-videokaart-8-gb-gddr6',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://azerty.nl/product/pny/4342270/uprising-dual-fan-geforce-rtx-3070',
    },
    {
      model: 'xlr8 revel',
      url: 'https://azerty.nl/product/pny/4342271/epic-x-rgb-geforce-rtx-3070-triple-fan-gaming-edition-xlr8--videokaart-8-gb-gddr6x',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3',
      url: 'https://azerty.nl/product/evga/4377247/geforce-rtx-3070-ftw3-videokaart-8-gb-gddr6',
    },
    {
      model: 'xc3',
      url: 'https://azerty.nl/product/evga/4377248/xc3-geforce-rtx-3070-xc3-videokaart-8-gb-gddr6',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://azerty.nl/product/evga/4377250/ftw3-ultra-geforce-rtx-3070-videokaart-8-gb-gddr6',
    },
    {
      model: 'xc3 black',
      url: 'https://azerty.nl/product/evga/4377252/xc3-black-geforce-rtx-3070-videokaart-8-gb-gddr6',
    },
  ]),
];
