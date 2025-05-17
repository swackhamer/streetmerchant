import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for multicom 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc',
      url: 'https://www.multicom.no/business/asus-geforce-rtx-3080-10gb/cat-p/c100134/p1001439690',
    },
    {
      model: 'strix',
      url: 'https://www.multicom.no/business/asus-geforce-rtx-3080-10gb/cat-p/c100134/p1001439691',
    },
    {
      model: 'tuf',
      url: 'https://www.multicom.no/business/asus-tuf-rtx3080-10g-gaming-grafikkort-gf-rtx/cat-p/c100134/p1001439753',
    },
    {
      model: 'turbo',
      url: 'https://www.multicom.no/business/asus-turbo-rtx3080-10g-grafikkort-gf-rtx/cat-p/c100134/p1001603429',
    },
    {
      model: 'strix white',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3080-o10g-white-oc-edition-grafikkort/cat-p/c100134/p1001547468',
    },
    {
      model: 'strix white',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3080-10g-white-grafikkort-gf-rtx/cat-p/c100134/p1001547470',
    },
    {
      model: 'ekwb',
      url: 'https://www.multicom.no/business/asus-rtx3080-10g-ek-grafikkort-gf-rtx/cat-p/c100134/p1001518226',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.multicom.no/business/gigabyte-aorus-geforce-rtx-3080/cat-p/c100134/p1001457081',
    },
    {
      model: 'eagle oc',
      url: 'https://www.multicom.no/business/gigabyte-geforce-rtx-3080-10gb/cat-p/c100134/p1001437238',
    },
    {
      model: 'eagle',
      url: 'https://www.multicom.no/business/gigabyte-geforce-rtx-3080-eagle/cat-p/c100134/p1001473457',
    },
    {
      model: 'gaming oc',
      url: 'https://www.multicom.no/business/gigabyte-geforce-rtx-3080-10gb/cat-p/c100134/p1001437239',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.multicom.no/business/gigabyte-aorus-geforce-rtx-3080/cat-p/c100134/p1001457889',
    },
    {
      model: 'vision oc',
      url: 'https://www.multicom.no/business/gigabyte-geforce-rtx-3080-vision/cat-p/c100134/p1001457887',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'twin x2 oc',
      url: 'https://www.multicom.no/business/inno3d-geforce-rtx-3080-10gb/cat-p/c100134/p1001440890',
    },
    {
      model: 'ichill x3',
      url: 'https://www.multicom.no/business/inno3d-geforce-rtx-3080-10gb/cat-p/c100134/p1001439688',
    },
    {
      model: 'ichill frostbite',
      url: 'https://www.multicom.no/business/inno3d-geforce-rtx-3080-10gb/cat-p/c100134/p1001518239',
    },
    {
      model: 'ichill x4',
      url: 'https://www.multicom.no/business/inno3d-geforce-rtx-3080-10gb/cat-p/c100134/p1001439689',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim',
      url: 'https://www.multicom.no/business/msi-geforce-rtx-3080-suprim/cat-p/c100134/p1001547471',
    },
    {
      model: 'gaming',
      url: 'https://www.multicom.no/business/msi-geforce-rtx-3080-gaming/cat-p/c100134/p1001440885',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.multicom.no/business/pny-xlr8-geforce-rtx-3080/cat-p/c100134/p1001440880',
    },
    {
      model: 'xlr8 gaming',
      url: 'https://www.multicom.no/business/gainward-geforce-rtx-3080-phoenix/cat-p/c100134/p1001441689',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.multicom.no/business/zotac-gaming-geforce-rtx-3080/cat-p/c100134/p1001440872',
    },
    {
      model: 'trinity',
      url: 'https://www.multicom.no/business/zotac-gaming-geforce-rtx-3080/cat-p/c100134/p1001440871',
    },
    {
      model: 'trinity oc',
      url: 'https://www.multicom.no/business/zotac-gaming-geforce-rtx-3080/cat-p/c100134/p1001440873',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phoenix gs',
      url: 'https://www.multicom.no/business/gainward-geforce-rtx-3080-phoenix/cat-p/c100134/p1001441689',
    },
  ]),

];
