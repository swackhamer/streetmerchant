import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for ollo 3090 series
 */
export const links: Link[] = [
  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gamerock oc',
      url: 'https://www.ollo.it/palit-rtx3090-game-rock-oc-nvidia-geforce-rtx-3090-24-gb-gddr6x/p_813155',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 uprising',
      url: 'https://www.ollo.it/pny-geforce-rtx-3090-24gb-xlr8-gaming-uprising-epic-x-rgb-triple-fan-edition/p_811356',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.ollo.it/zotac-geforce-rtx-3090-trinity-24gb-gddr6x/p_809667',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.ollo.it/msi-nvidia-geforce-rtx-3090-ventus-3x-24g-oc/p_803924',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.ollo.it/msi-nvidia-geforce-rtx-3090-gaming-x-trio-24g/p_803923',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.ollo.it/asus-nvidia-geforce-rtx-3090-24g-tuf-rtx3090-o24g-gaming/p_805889',
    },
  ]),
];
