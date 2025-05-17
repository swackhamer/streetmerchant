import {HTTPResponse} from 'puppeteer';

/**
 * Options for making requests
 */
export interface RequestOptions {
  retries?: number;
  retryOn?: Array<number | [number, number]>;
  backoffOn?: Array<number | [number, number]>;
  waitTime?: number;
}

/**
 * Result of a request operation
 */
export interface ResponseResult {
  response: HTTPResponse;
  statusCode: number;
  pageContent: string;
  success: boolean;
}