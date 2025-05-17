import {config} from '../../../config';
import {isStatusCodeInRange} from '../../../util';
import {Store} from '../../../store/model/store';

/**
 * Check if a status code indicates success based on store configuration
 */
export function isSuccessStatusCode(statusCode: number, store: Store): boolean {
  if (store.successStatusCodes) {
    return isStatusCodeInRange(statusCode, store.successStatusCodes);
  }
  
  // Default success range: 200-299
  return statusCode >= 200 && statusCode <= 299;
}

/**
 * Check if we should retry based on status code
 */
export function shouldRetry(
  statusCode: number,
  retryOn?: Array<number | [number, number]>
): boolean {
  if (retryOn) {
    return isStatusCodeInRange(statusCode, retryOn);
  }
  
  // Default retry on server errors
  return statusCode >= 500 && statusCode <= 599;
}

/**
 * Check if we should back off based on status code
 */
export function shouldBackoff(
  statusCode: number,
  store: Store,
  backoffOn?: Array<number | [number, number]>
): boolean {
  if (backoffOn) {
    return isStatusCodeInRange(statusCode, backoffOn);
  }
  
  if (store.backoffStatusCodes) {
    return isStatusCodeInRange(statusCode, store.backoffStatusCodes);
  }
  
  // Default backoff on rate limiting (429) and some server errors
  return statusCode === 429 || statusCode === 503;
}

/**
 * Calculate backoff time with exponential increase
 */
export function calculateBackoff(attempt: number): number {
  const minBackoff = config.browser.minBackoff;
  const maxBackoff = config.browser.maxBackoff;
  const backoff = Math.min(minBackoff * Math.pow(2, attempt - 1), maxBackoff);
  
  // Add jitter to prevent synchronized retries
  const jitter = Math.random() * 0.3 * backoff;
  return backoff + jitter;
}