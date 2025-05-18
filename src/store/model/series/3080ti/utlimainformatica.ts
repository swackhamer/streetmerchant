import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for utlimainformatica 3080ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'strix lc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98325-asus-rog-strix-lc-rtx3080ti-12g-gaming-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-222558-222559-222560-222561-222562-4711081220855.html',
    },
    {
      model: 'strix oc lc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98324-asus-rog-strix-lc-rtx3080ti-o12g-gaming-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-222553-222554-222555-222556-222557-4711081220824.html',
    },
    {
      model: 'strix',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98322-asus-rog-strix-rtx3080ti-12g-gaming-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-222543-222544-222545-222546-222547-4711081171225.html',
    },
    {
      model: 'strix oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98323-asus-rog-strix-rtx3080ti-o12g-gaming-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-222548-222549-222550-222551-222552-4711081169765.html',
    },
    {
      model: 'tuf oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98328-asus-tuf-gaming-tuf-rtx3080ti-o12g-gaming-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-222568-222569-222570-222571-222572-4711081169802.html',
    },
    {
      model: 'tuf',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98327-asus-tuf-rtx3080ti-12g-gaming-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-222563-222564-222565-222566-222567-4711081169864.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'aorus master',
      url: 'https://ultimainformatica.com/tarjetas-graficas/99483-gigabyte-aorus-geforce-rtx-3080-ti-master-12g-nvidia-12-gb-gddr6x-4719331308865.html',
    },
    {
      model: 'eagle',
      url: 'https://ultimainformatica.com/tarjetas-graficas/99488-gigabyte-eagle-12g-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-4719331308834.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'gaming x trio',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98362-msi-geforce-rtx-3080-ti-gaming-x-trio-12g-nvidia-12-gb-gddr6x-222613-222614-222615-222616-222617-4719072824969.html',
    },
    {
      model: 'suprim x',
      url: 'https://ultimainformatica.com/tarjetas-graficas/99499-msi-geforce-rtx-3080-ti-suprim-x-12g-nvidia-12-gb-gddr6x-4719072813390.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98995-msi-geforce-rtx-3080-ti-ventus-3x-12g-oc-tarjeta-grafica-nvidia-12-gb-gddr6x-224033-224034-224035-224036-224037-4719072821364.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080ti', [
    {
      model: 'xlr8 revel',
      url: 'https://ultimainformatica.com/tarjetas-graficas/98427-pny-vcg3080t12tfxppb-tarjeta-grafica-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-222753-222754-222755-222756-222757-0751492645360.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'trinity',
      url: 'https://ultimainformatica.com/tarjetas-graficas/99498-zotac-zt-a30810d-10p-tarjeta-grafica-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-4895173623189.html',
    },
    {
      model: 'amp holo',
      url: 'https://ultimainformatica.com/tarjetas-graficas/99497-zotac-zt-a30810f-10p-tarjeta-grafica-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-4895173623196.html',
    },
    {
      model: 'trinity oc',
      url: 'https://ultimainformatica.com/tarjetas-graficas/99496-zotac-zt-a30810j-10p-tarjeta-grafica-nvidia-geforce-rtx-3080-ti-12-gb-gddr6x-4895173623202.html',
    },
  ]),
];
