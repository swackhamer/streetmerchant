import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for acompc 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-ROG-STRIX-RTX3080-10G-GAMING-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-2-x-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-ROG-STRIX-RTX3080-O10G-GAMING-OC-Edition-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-2-x-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'tuf',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3080-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3080-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-AORUS-GeForce-RTX-3080-MASTER-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-3-x-DisplayPort-3-x-HDMI.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-AORUS-GeForce-RTX-3080-XTREME-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-3-x-DisplayPort-3-x-HDMI.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-Eagle-OC-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'eagle',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-Eagle-10G-Grafikkarte-10.240-MB.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-GAMING-OC-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-Vision-OC-10G-Grafikkarten-GF-RTX-3080-10GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DP-weiss.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'twin x2 oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Inno3D-GeForce-RTX-3080-Twin-X2-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6-PCIe-4.0-x16-HDMI-3x-DisplayPort.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-GeForce-RTX-3080-Gaming-X-Trio-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-GeForce-RTX-3080-Ventus-3X-10G-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3080-AMP-Holo-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3080-Trinity-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'trinity',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3080-Trinity-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-HDMI-3x-DisplayPort.html',
    },
  ]),

];
