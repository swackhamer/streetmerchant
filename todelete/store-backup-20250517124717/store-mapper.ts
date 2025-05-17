import {Store, Series} from './store';

/**
 * Helper to determine which series are covered by a store
 */
export function getStoreSeries(store: Store): Series[] {
  const seriesSet = new Set<Series>();
  
  for (const link of store.links) {
    seriesSet.add(link.series);
  }
  
  return Array.from(seriesSet);
}

/**
 * Helper to determine if a store covers only a single series
 */
export function isSingleSeriesStore(store: Store): boolean {
  return getStoreSeries(store).length === 1;
}

/**
 * Helper to get the single series for a store, or undefined if the store
 * covers multiple series
 */
export function getSingleStoreSeriesName(store: Store): Series | undefined {
  const series = getStoreSeries(store);
  return series.length === 1 ? series[0] : undefined;
}