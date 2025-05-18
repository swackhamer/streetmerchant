import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for umart 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.umart.com.au/Asus-ROG-Strix-GeForce-RTX-3080-10G-Graphics-Card_56894G.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.umart.com.au/Asus-ROG-Strix-GeForce-RTX-3080-OC-10G-Graphics-Card_56893G.html',
    },
    {
      model: 'tuf',
      url: 'https://www.umart.com.au/Asus-GeForce-RTX-3080-TUF-Gaming-10G-Graphics-Card_56792G.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.umart.com.au/Asus-GeForce-RTX-3080-TUF-Gaming-OC-10G-Graphics-Card_56895G.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.umart.com.au/EVGA-GeForce-RTX-3080-FTW3-Ultra-Gaming-10G-Graphics-Card_57050G.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.umart.com.au/EVGA-GeForce-RTX-3080-XC3-Ultra-Gaming-10G-Graphics-Card_57049G.html',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.umart.com.au/Galax-GeForce-RTX-3080-SG--1-Click-OC--10G-Graphics-Card_56817G.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.umart.com.au/Gigabyte-Aorus-GeForce-RTX-3080-Master-10G-Graphics-Card_56885G.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.umart.com.au/Gigabyte-AORUS-GeForce-RTX-3080-Xtreme-10G-Graphics-Card_56969G.html',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.umart.com.au/Gigabyte-Aorus-GeForce-RTX-3080-Xtreme-Waterforce-10G-Graphics-Card_57650G.html',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Xtreme-WaterForce-WB-10G-Graphics-Card_57486G.html',
    },
    {
      model: 'eagle',
      url: 'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Eagle-10G-Graphics-Card_57335G.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Eagle-OC-10G-Graphics-Card_56791G.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Gaming-OC-10G-Graphics-Card_56790G.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Vision-10G-OC-Graphics-Card_56886G.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.umart.com.au/Inno3D-GeForce-RTX-3080-iCHILL-X4-10G-Graphics-Card_56962G.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.umart.com.au/MSI-GeForce-RTX-3080-Gaming-X-Trio-10G-Graphics-Card_56788G.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.umart.com.au/MSI-GeForce-RTX-3080-Suprim-X-10G-Graphics-Card_57617G.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.umart.com.au/MSI-GeForce-RTX-3080-Ventus-3X-10G-Graphics-Card_56789G.html',
    },
  ]),
];
