import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for aria ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.aria.co.uk/Products/Components/Processors/AMD+CPUs/Ryzen+9+-+Socket+AM4/AMD+Ryzen+9+5950X+16+Core+AM4+CPU%2FProcessor?productId=72868',
    },
  ]),

];
