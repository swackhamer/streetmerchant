import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for rosman 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://rosmancomputers.com.au/asus-nvidia-geforce-rtx-3080-10gb-2100mhz-core-clock-4750mhz-memory-clock/',
    },
    {
      model: 'tuf oc',
      url: 'https://rosmancomputers.com.au/asus-nvidia-tuf-gaming-geforce-rtx-3080-10gb-buffed-up-design-with-chart-topping-thermal-performance/',
    },
    {
      model: 'strix',
      url: 'https://rosmancomputers.com.au/asus-nvidia-rog-strix-geforce-rtx-3080-buffed-up-design-with-chart-topping-thermal-performance/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle oc',
      url: 'https://rosmancomputers.com.au/gigabyte-geforce-rtx-3080-eagle-oc-10gb/',
    },
    {
      model: 'aorus master',
      url: 'https://rosmancomputers.com.au/gigabyte-nvidia-gv-n3080aorusm-10gd1/',
    },
    {
      model: 'aorus xtreme',
      url: 'https://rosmancomputers.com.au/aorus-geforce-rtx-3080-xtreme-10g/',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://rosmancomputers.com.au/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card/',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://rosmancomputers.com.au/gigabyte-gv-n3080aorusx-wb-10gd-nvidia/',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-ichill-x4-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-4xfans-750w-3-years-warranty/',
    },
    {
      model: 'ichill x3',
      url: 'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-ichill-x3-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-3xfans-750w-3-years-warranty/',
    },
    {
      model: 'twin x2 oc',
      url: 'https://rosmancomputers.com.au/inno3d-nvidia-rtx-3080-twin-x2-oc-mhz-10gb-gddr6x-3xdp-1xhdmi-atx-3xfans-750w-3-years-warranty/',
    },
  ]),
];
