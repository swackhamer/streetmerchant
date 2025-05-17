/**
 * Core logger functionality
 */
import chalk from 'chalk';
import * as winston from 'winston';
import {config} from '../config';

/**
 * Custom formatter for pretty JSON output
 */
const prettyJson = winston.format.printf(info => {
  const timestamp = new Date().toLocaleTimeString();

  let out = `${chalk.gray(`[${timestamp}]`)} ${info.level} ${chalk.gray(
    '::'
  )} ${info.message}`;

  if (Object.keys(info.metadata as object).length > 0) {
    out = `${out} ${chalk.magenta(JSON.stringify(info.metadata, null, 2))}`;
  }

  return out;
});

/**
 * Create and configure the Winston logger
 */
export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.metadata({
      fillExcept: ['level', 'message', 'timestamp'],
    }),
    prettyJson
  ),
  level: config.logLevel,
  transports: [new winston.transports.Console({})],
});