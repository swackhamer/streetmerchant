import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for pcbyte 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-tuf-gaming-10gb-video-card-tuf-rtx3080-10g-gaming-56837?search=rtx+3080',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card-tuf-rtx3080-o10g-gaming-56838',
    },
    {
      model: 'strix oc',
      url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-rog-strix-oc-10gb-video-card-rog-strix-rtx3080-o10g-gaming-57717',
    },
    {
      model: 'strix oc white',
      url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-rog-strix-oc-10gb-video-card-white-rog-strix-rtx3080-o10g-white-151575',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.pcbyte.com.au/store/product/galax-nvidia-geforce-rtx-3080-sg-1-click-oc-video-card-38nwm3md99nn-57223',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-eagle-10g-video-card-gv-n3080eagle-10gd-63192',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-eagle-oc-10gb-video-card-gv-n3080eagle-oc-10gd-24750',
    },
    {
      model: 'vision oc',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-vision-oc-10g-video-card-gv-n3080vision-oc-10gd-57540',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-gaming-oc-10gb-video-card-gv-n3080gaming-oc-10gd-53154',
    },
    {
      model: 'aorus master',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-aorus-master-10g-video-card-gv-n3080aorus-m-10gd-57539',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-aorus-xtreme-10gb-video-card-gv-n3080aorus-x-10gd-60222',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc-video-card-53151',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-gaming-x-trio-10g-video-card-53150',
    },
    {
      model: 'suprim x',
      url: 'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-suprim-x-10g-video-card-64075',
    },
  ]),
];
