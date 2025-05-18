import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for acompc 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.acom-pc.de/Peripherie-Zubehoer/noch-nicht-kategorisierte-Artikel/ASUS-ROG-Strix-GeForce-RTX-3090-ROG-STRIX-RTX3090-24G-GAMING-24GB-GDDR6X-2x-HDMI-3x-DP-90YV0F90-M0NM00-.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-ROG-STRIX-RTX3090-O24G-GAMING-OC-Edition-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-2-x-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'tuf',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3090-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3090-OC-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-Aorus-GeForce-RTX-3090-Master-24G-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3090-Eagle-OC-24G-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3090-Gaming-OC-24G-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-RTX-3090-GAMING-X-TRIO-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-GeForce-RTX-3090-Ventus-3X-24G-OC-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3090-Trinity-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-HDMI-3x-DisplayPort.html',
    },
  ]),
];
