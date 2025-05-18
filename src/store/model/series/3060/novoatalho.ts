import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for novoatalho 3060 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'ventus 3x',
      url: 'https://www.novoatalho.pt/pt-PT/produto/47052/Placa-Grafica-MSI-GeForce-RTX-3060-VENTUS-3X-OC-12G/912-V397-038.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46883/Placa-Grafica-MSI-GeForce-RTX-3060-GAMING-X-TRIO-OC-12GB/912-V390-081.html',
    },
    {
      model: 'gaming x',
      url: 'https://www.novoatalho.pt/pt-PT/produto/47050/Placa-Grafica-MSI-GeForce-RTX-3060-GAMING-X-12G/912-V397-037.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'gaming oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46920/Placa-Grafica-Gigabyte-GeForce-RTX-3060-Gaming-OC-12GB/GVN3060GO-00-10.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'tuf oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46702/Placa-Grafica-Asus-GeForce-RTX-3060-TUF-GAMING-OC-12GB/90YV0GC0-M0NA00.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.novoatalho.pt/pt-PT/produto/46701/Placa-Grafica-Asus-GeForce-RTX-3060-ROG-STRIX-OC-12GB/90YV0GC2-M0NA00.html',
    },
  ]),
];
