import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for msy 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.msy.com.au/asus-nvidia-tuf-rtx3080-10g-gaming-10gb-rtx-3080-tuf-gaming',
    },
    {
      model: 'tuf oc',
      url: 'https://www.msy.com.au/asus-nvidia-tuf-rtx3080-o10g-gaming-10gb-rtx-3080-tuf-gaming-vga-card',
    },
    {
      model: 'strix',
      url: 'https://www.msy.com.au/asus-nvidia-geforce-rog-strix-rtx3080-o10g-gaming-10gb-rtx-3080-rog-strix-vga-card',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3080eagle-oc-10gd-10gb-rtx-3080-eagle-oc-pci-e-vga-card',
    },
    {
      model: 'gaming oc',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3080gaming-oc-10gd-10gb-rtx-3080-gaming-oc-pci-e-vga-card',
    },
    {
      model: 'vision oc',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3080vision-oc-10gd-10gb-rtx-3080-vision-oc-pci-e-vga-card',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-suprim-x-10g-10gb-rtx-3080-suprim-x-pci-e-vga-card',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-gaming-x-trio-10g-10gb-rtx-3080-gaming-x-trio-pci-e-vga-card',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc-10gb-rtx-3080-ventus-3x-oc-pci-e-vga-card',
    },
  ]),
];
