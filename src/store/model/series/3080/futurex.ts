import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for futurex 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.future-x.de/asus-vga-10gb-rtx3080-tuf-gaming-oc-3xdp-2xhdmi-geforce-rtx-3080-grafikkarte-pci-express-10240-mb-displayport-eingang-p-8649614',
    },
    {
      model: 'strix',
      url: 'https://www.future-x.de/asus-rog-strix-geforce-rtx-3080-10gb-grafikkarte-pci-express-10240-mb-displayport-eingang-p-8649611',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.future-x.de/msi-geforce-rtx-3080-gaming-x-tr-grafikkarte-10240-mb-p-8649610',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.future-x.de/msi-geforce-rtx-3080ventus-3x10g-oc-grafikkarte-10240-mb-p-8649609',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.future-x.de/zotac-gaming-geforce-rtx-3080-amp-holo-memory-10gb-gddr6x-320-bit-p-8649625',
    },
    {
      model: 'trinity',
      url: 'https://www.equippr.de/zotac-geforce-rtx-3080-trinity-10-gb-gddr6x-retail-2060389.html',
    },
  ]),
];
