import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for multicom 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://www.multicom.no/business/gigabyte-geforce-rtx-3070-eagle/cat-p/c100134/p1001473456',
    },
    {
      model: 'gaming oc',
      url: 'https://www.multicom.no/business/gigabyte-geforce-rtx-3070-gaming/cat-p/c100134/p1001473455',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 3x',
      url: 'https://www.multicom.no/business/msi-rtx-3070-ventus-3x/cat-p/c100134/p1001503071',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.multicom.no/business/msi-geforce-rtx-3070-gaming/cat-p/c100134/p1001503070',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.multicom.no/business/msi-rtx-3070-ventus-2x/cat-p/c100134/p1001503072',
    },
    {
      model: 'suprim x',
      url: 'https://www.multicom.no/business/msi-geforce-rtx-3070-suprim/cat-p/c100134/p1001541399',
    },
    {
      model: 'suprim x',
      url: 'https://www.multicom.no/business/msi-geforce-rtx-3070-suprim/cat-p/c100134/p1001572688',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.multicom.no/business/zotac-gaming-geforce-rtx-3070/cat-p/c100134/p1001456156',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.multicom.no/business/zotac-gaming-geforce-rtx-3070/cat-p/c100134/p1001467976',
    },
    {
      model: 'twin edge oc white',
      url: 'https://www.multicom.no/business/zotac-gaming-geforce-rtx-3070/cat-p/c100134/p1001545723',
    },
    {
      model: 'amp holo',
      url: 'https://www.multicom.no/business/zotac-gaming-geforce-rtx-3070/cat-p/c100134/p1001557254',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'strix white',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3070-o8g-white-oc-edition-grafikkort/cat-p/c100134/p1001547460',
    },
    {
      model: 'dual',
      url: 'https://www.multicom.no/business/asus-dual-rtx3070-8g-grafikkort-gf-rtx/cat-p/c100134/p1001453116',
    },
    {
      model: 'strix white',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3070-8g-white-grafikkort-gf-rtx/cat-p/c100134/p1001547461',
    },
    {
      model: 'tuf oc',
      url: 'https://www.multicom.no/business/asus-tuf-rtx3070-o8g-gaming-grafikkort-gf-rtx/cat-p/c100134/p1001491549',
    },
    {
      model: 'strix oc',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3070-o8g-gaming-grafikkort-gf-rtx/cat-p/c100134/p1001460875',
    },
    {
      model: 'dual oc',
      url: 'https://www.multicom.no/business/asus-dual-rtx3070-o8g-oc-edition-grafikkort/cat-p/c100134/p1001505106',
    },
    {
      model: 'tuf',
      url: 'https://www.multicom.no/business/asus-tuf-rtx3070-8g-gaming-grafikkort-gf-rtx/cat-p/c100134/p1001491550',
    },
    {
      model: 'strix',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3070-8g-gaming-grafikkort-gf-rtx/cat-p/c100134/p1001503069',
    },
    {
      model: 'ekwb',
      url: 'https://www.multicom.no/business/asus-rtx3070-8g-ek-grafikkort-gf-rtx/cat-p/c100134/p1001547462',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.multicom.no/business/pny-xlr8-geforce-rtx-3070/cat-p/c100134/p1001506149',
    },
    {
      model: 'dual',
      url: 'https://www.multicom.no/business/pny-geforce-rtx-3070-dual/cat-p/c100134/p1001506150',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'twin x2 oc',
      url: 'https://www.multicom.no/business/inno3d-geforce-rtx-3070-8gb/cat-p/c100134/p1001501648',
    },
    {
      model: 'ichill x3',
      url: 'https://www.multicom.no/business/inno3d-geforce-rtx-3070-8gb/cat-p/c100134/p1001501647',
    },
    {
      model: 'ichill x4',
      url: 'https://www.multicom.no/business/inno3d-geforce-rtx-3070-8gb/cat-p/c100134/p1001501646',
    },
  ]),

];
