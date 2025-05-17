import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for argos-ie sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'http://www.argos.ie/static/Product/partNumber/8349000/Trail/searchtext%3EPS5+CONSOLE.htm',
    },
  ]),

];
