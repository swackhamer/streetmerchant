import {config} from '../config';
import chalk from 'chalk';

import {Link} from './model';

/**
 * Returns true if the brand should be checked for stock
 *
 * @param brand The brand of the GPU
 */
function filterBrand(brand: Link['brand']): boolean {
  if (config.store.showOnlyBrands.length === 0) {
    return true;
  }

  return config.store.showOnlyBrands.includes(brand);
}

/**
 * Returns true if the model should be checked for stock
 *
 * @param model The model of the GPU
 * @param series The series of the GPU
 */
function filterModel(model: Link['model'], series: Link['series']): boolean {
  if (config.store.showOnlyModels.length === 0) {
    return true;
  }

  const sanitizedModel = model.replace(/\s/g, '');
  const sanitizedSeries = series.replace(/\s/g, '');
  for (const configModelEntry of config.store.showOnlyModels) {
    const sanitizedConfigModel = configModelEntry.name.replace(/\s/g, '');
    const sanitizedConfigSeries = configModelEntry.series.replace(/\s/g, '');
    if (sanitizedConfigSeries) {
      if (sanitizedSeries === sanitizedConfigSeries && sanitizedModel === sanitizedConfigModel) {
        return true;
      }
    } else if (sanitizedModel === sanitizedConfigModel) {
      return true;
    }
  }

  return false;
}

/**
 * Returns true if the series should be checked for stock
 *
 * @param series The series of the GPU
 */
export function filterSeries(series: Link['series']): boolean {
  // Using info level for series filtering logs
  console.info(
    chalk.blue('[DEBUG]'),
    `Filtering series: ${chalk.yellow(series)}, showOnlySeries: ${chalk.cyan(
      JSON.stringify(config.store.showOnlySeries)
    )}`
  );
  if (config.store.showOnlySeries.length === 0) {
    return true;
  }

  const result = config.store.showOnlySeries.includes(series);
  console.info(
    chalk.blue('[DEBUG]'),
    `Series ${chalk.yellow(series)} included? ${result ? chalk.green('true') : chalk.red('false')}`
  );
  return result;
}

/**
 * Returns true if the link should be checked for stock
 *
 * @param link The store link of the GPU
 */
export function filterStoreLink(link: Link): boolean {
  return (
    filterBrand(link.brand) && filterModel(link.model, link.series) && filterSeries(link.series)
  );
}
