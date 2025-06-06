import type {Cheerio} from 'cheerio';
import type {ParentNode} from 'domhandler';
import {Link, Model, Series} from '../store';
import {logger} from '../../../logger';

export interface Card {
  brand: string;
  model: Model;
}

interface LinksBuilderOptions {
  productsSelector: string;
  sitePrefix: string;
  titleAttribute?: string;
  titleSelector: string;
  urlSelector?: string;
}

export type LinksBuilderBuilder = ((docElement: Cheerio<ParentNode>, series: Series) => Link[]) & {
  readonly options?: Readonly<LinksBuilderOptions>;
};

const isPartialUrlRegExp = /^(?!https?:).*/i;

export function getProductLinksBuilder(options: LinksBuilderOptions): LinksBuilderBuilder {
  const builder: LinksBuilderBuilder = (docElement, series) => {
    const productElements = docElement.find(options.productsSelector);
    const links: Link[] = [];
    for (let i = 0; i < productElements.length; i++) {
      const productElement = productElements.eq(i);
      const titleElement = productElement.find(options.titleSelector).first();

      const title = options.titleAttribute
        ? titleElement.attr()?.[options.titleAttribute]
        : titleElement.text()?.replace(/\n/g, ' ').trim();

      if (!title) {
        continue;
      }

      let urlElement = titleElement;

      if (options.urlSelector) {
        urlElement = urlElement.find(options.urlSelector).first();
        if (urlElement.empty()) {
          urlElement = productElement.find(options.urlSelector).first();
        }
      }

      let url = urlElement.attr()?.href;

      if (!url) {
        continue;
      }

      if (isPartialUrlRegExp.exec(url)) {
        url = options.sitePrefix + url;
      }

      const card = parseCard(title);

      if (card) {
        links.push({
          brand: card.brand as any,
          model: card.model,
          series,
          url,
        });
      } else {
        logger.error(`Failed to parse card: ${title}`, {url});
      }
    }

    return links;
  };

  Object.assign(builder, {options});

  return builder;
}

export function parseCard(name: string): Card | null {
  name = name.replace(/\w+-\w+-[^ ]+/g, '');
  name = name.replace(/\([^(]*\)/g, '');
  name = name.replace(/, .+$/, '');
  name = name.replace(/ with .+$/, '');
  name = name.replace(/pci-express/gi, '');
  name = name.replace(/ - .*$/g, '');

  // Account for incorrect titles, e.g. MSIGeforce
  name = name.replace(/geforce/i, '');

  name = name.replace(/[^\w ]+/g, '');
  name = name.replace(/\bgraphics card\b/gi, '');
  name = name.replace(/\b(?<!founders|limited) edition\b/gi, '');
  name = name.replace(/\b(series )?bundle\b/gi, '');
  name = name.replace(/\bfan\b/gi, '');
  name = name.replace(/\s{2,}/g, ' ').trim();

  let model = name.split(' ');
  const brand = model.shift();

  if (!brand) {
    return null;
  }

  // Split non spaced TitleCase words only after extracting brand
  model = model
    .join(' ')
    .replace(/([A-Z][a-z]+)([A-Z][a-z]+)/g, '$1 $2')
    .split(' ');

  // Some vendors have oc at the beginning of the product name,
  // store whether the card contains the term "oc" and remove
  // it during filtering, then add it to the end of the name.
  let isOC = false;

  /* eslint-disable @typescript-eslint/prefer-regexp-exec */
  model = model.filter(word => {
    if (word.toLowerCase() === 'oc') {
      isOC = true;
      return false;
    }

    return (
      !word.match(/^(graphics|card|gpu|pci-?e(xpress)?|ray-?tracing|ray|tracing|core|boost)$/i) &&
      !word.match(/^(nvidia|geforce|ge|force|rtx|ti|super|amp[ae]re|blackwell|epic-?x)$/i) &&
      !word.match(/^(amd|radeon|rx|xt|rdna[0-9]*)$/i) &&
      !word.match(/^(\d+(?:gb?|mhz)?|gb|mhz|g?ddr(\d+x?)?)$/i) &&
      !word.match(/^(display[ -]?port|hdmi|vga)$/i)
    );
  });
  /* eslint-enable @typescript-eslint/prefer-regexp-exec */

  if (isOC) model.push('oc');
  if (model.length === 0) return null;

  return {
    brand: brand.toLowerCase(),
    model: model
      .join(' ')
      .toLowerCase()
      .replace(/ (?:for )?gaming\b/g, '')
      .trim() as Model,
  };
}
