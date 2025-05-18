import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for acompc rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'challenger',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/ASRock-Radeon-RX-6700-XT-Challenger-D-12GB-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'challenger oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/ASRock-Radeon-RX-6700-XT-Challenger-D-12GB-OC-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'challenger pro oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/ASRock-Radeon-RX-6700-XT-Challenger-Pro-12GB-OC-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-HDMI-3-x-DisplayPort.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'dual',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/ASUS-DUAL-RX6700XT-12G-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/ASUS-TUF-RX6700XT-O12G-GAMING-OC-Edition-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/ASUS-ROG-STRIX-RX6700XT-O12G-GAMING-OC-Edition-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-HDMI-3-x-DisplayPort.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'aorus elite',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/Gigabyte-AORUS-Radeon-RX-6700-XT-ELITE-12G-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-2-x-HDMI-2-x-DisplayPort.html',
    },
    {
      model: 'eagle',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/Gigabyte-Radeon-RX-6700-XT-EAGLE-12G-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-2x-HDMI-2x-DisplayPort.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/Gigabyte-Radeon-RX-6700-XT-GAMING-OC-12G-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-2x-HDMI-2x-DisplayPort.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'gaming x',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/MSI-Radeon-RX-6700-XT-GAMING-X-12G-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'mech 2x oc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/MSI-Radeon-RX-6700-XT-MECH-2X-12G-OC-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-HDMI-3-x-DisplayPort.html',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6700xt', [
    {
      model: 'red devil',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/PowerColor-Red-Devil-Radeon-RX-6700XT-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-HDMI-3-x-DisplayPort.html',
    },
    {
      model: 'hellhound',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/PowerColor-Hellhound-Radeon-RX-6700XT-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-HDMI-3-x-DisplayPort.html',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'nitro+',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/Sapphire-NITRO-Radeon-RX-6700-XT-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-HDMI-3x-DisplayPort.html',
    },
    {
      model: 'pulse',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/Sapphire-Pulse-Radeon-RX-6700-XT-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-HDMI-3x-DisplayPort.html',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6700xt', [
    {
      model: 'merc',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/XFX-Speedster-MERC319-Radeon-RX-6700-XT-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-HDMI-3-x-DisplayPort-Schwarz.html',
    },
    {
      model: 'qick',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/XFX-Speedster-QICK319-Radeon-RX-6700-XT-Grafikkarten-Radeon-RX-6700-XT-12-GB-GDDR6-PCIe-4.0-x16-HDMI-3-x-DisplayPort-Schwarz.html',
    },
    {
      model: 'swft',
      url: 'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-AMD/ATI-PCI-Express/XFX-VGA-12GB-Radeon-RX6700XT-SWFT-309-Gaming-3xDP-H-Radeon-RX-6700XT-Grafikkarte-12.288-MB.html',
    },
  ]),
];
