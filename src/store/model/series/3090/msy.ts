import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for msy 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://www.msy.com.au/asus-nvidia-geforce-tuf-rtx3090-o24g-gaming-24gb-rtx-3090-tuf-gaming-oc-pci-e-vga-card',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3090aorus-m-24gd-24gb-rtx-3090-aorus-master-pci-e-vga-card',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3090aorus-x-24gd-24gb-rtx-3090-aorus-xtreme-pci-e-vga-card',
    },
    {
      model: 'eagle oc',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3090eagle-oc-24gd-24gb-rtx-3090-eagle-oc-pci-e-vga-card',
    },
    {
      model: 'gaming oc',
      url: 'https://www.msy.com.au/gigabyte-nvidia-n3090gaming-oc-24gd-24gb-rtx-3090-gaming-oc-pci-e-vga-card',
    },
    {
      model: 'vision oc',
      url: 'https://www.msy.com.au/gigabyte-nvidia-geforce-n3090vision-oc-24gd-24gb-rtx-3090-vision-oc-vga-card',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3090-ventus-3x-24g-oc-24gb-rtx-3090-ventus-3x-oc-pci-e-vga-card',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3090-gaming-x-trio-24g-24gb-rtx-3090-gaming-x-trio-pci-e-vga-card',
    },
    {
      model: 'suprim x',
      url: 'https://www.msy.com.au/msi-nvidia-geforce-rtx-3090-suprim-x-24g-24gb-rtx-3090-suprim-x-pci-e-vga-card',
    },
  ]),
];
