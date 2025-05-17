import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for harristechnology 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.ht.com.au/part/BY216-Gigabyte-GeForce-RTX-3080-GAMING-OC-10GB-Video-Card/detail.hts',
    },
    {
      model: 'vision oc',
      url: 'https://www.ht.com.au/part/BZ284-Gigabyte-nVidia-GeForce-RTX-3080-VISION-OC-10G-GDDR6X-1800-MHz-PCIE4.0x16-7680x432060Hz-3xDP-2xHDMI/detail.hts',
    },
    {
      model: 'aorus master',
      url: 'https://www.ht.com.au/part/BZ346-Gigabyte-nVidia-GeForce-RTX-3080-MASTER-AORUS-10G-GDDR6X-1845-MHz-3xDP-3xHDMI/detail.hts',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.ht.com.au/part/BY193-MSI-GeForce-RTX-3080-GAMING-X-TRIO-10GB-Video-Card/detail.hts',
    },
  ]),

];
