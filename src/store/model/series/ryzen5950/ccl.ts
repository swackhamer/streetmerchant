import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for ccl ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.cclonline.com/product/331768/100-100000059WOF/CPU-Processors/AMD-Ryzen-9-5950X-3-4GHz-Hexadeca-Core-Processor-with-16-Cores-32-Threads-105W-TDP-72MB-Cache-4-9GHz-Turbo-No-Cooler/CPU0682/',
    },
  ]),

];
