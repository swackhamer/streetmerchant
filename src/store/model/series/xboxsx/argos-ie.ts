import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for argos-ie xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'http://www.argos.ie/static/Product/partNumber/8448262/Trail/searchtext%3EXBOX+SERIES+X.htm',
    },
  ]),

];
