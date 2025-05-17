import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for ollo 3080 series
 */
export const links: Link[] = [
  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phoenix',
      url: 'https://www.ollo.it/palit-ned3080019ia-132aa-nvidia-geforce-rtx-3080-10-gb-gddr6x/p_805886',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.ollo.it/gainward-geforce-rtx-3080-phoenix-nvidia-10-gb-gddr6x/p_813151',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity oc',
      url: 'https://www.ollo.it/zotac-zt-a30800j-10p-nvidia-geforce-rtx-3080-10-gb-gddr6x/p_811027',
    },
    {
      model: 'trinity',
      url: 'https://www.ollo.it/zotac-geforce-rtx-3080-trinity-10gb-gddr6x/p_805602',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 gaming',
      url: 'https://www.ollo.it/pny-vcg308010tfxmpb-nvidia-geforce-rtx-3080-10-gb-gddr6x/p_805892',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.ollo.it/asus-tuf-gaming-nvidia-geforce-rtx-3080-oc-10gb-gddr6x/p_805890',
    },
    {
      model: 'tuf',
      url: 'https://www.ollo.it/asus-geforce-rtx-3080-10g-tuf-rtx3080-10g-gaming/p_805601',
    },
    {
      model: 'strix oc',
      url: 'https://www.ollo.it/asus-rog-strix-rtx-3080-o10g-gaming-geforce-rtx-3080-oc-10gb-gddr6x/p_805698',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.ollo.it/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc/p_803926',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.ollo.it/msi-geforce-rtx-3080-gaming-x-trio-10g/p_803925',
    },
  ]),

];
