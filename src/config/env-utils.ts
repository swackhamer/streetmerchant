/**
 * Environment variable utility functions
 * 
 * This module provides helper functions for working with environment variables
 * and converting them to the appropriate types.
 */

/**
 * Returns environment variable, given array, or default array.
 *
 * @param environment Interested environment variable.
 * @param array Default array. If not set, is `[]`.
 */
export function envOrArray(
  environment: string | undefined,
  array?: string[]
): string[] {
  return (
    environment
      ? environment.includes('\n')
        ? environment.split('\n')
        : environment.split(',')
      : array ?? []
  ).map(s => s.trim());
}

/**
 * Returns environment variable, given boolean, or default boolean.
 *
 * @param environment Interested environment variable.
 * @param boolean Default boolean. If not set, is `true`.
 */
export function envOrBoolean(
  environment: string | undefined,
  boolean?: boolean
): boolean {
  return environment ? environment === 'true' : boolean ?? true;
}

/**
 * Returns environment variable, given string, or default string.
 *
 * @param environment Interested environment variable.
 * @param string Default string. If not set, is `''`.
 */
export function envOrString(environment: string | undefined, string?: string): string {
  return environment ? environment : string ?? '';
}

/**
 * Returns environment variable, given number, or default number.
 *
 * @param environment Interested environment variable.
 * @param number Default number. If not set, is `0`.
 */
export function envOrNumber(environment: string | undefined, number?: number): number {
  return environment ? Number(environment) : number ?? 0;
}

/**
 * Returns environment variable, given number, or default number,
 * while handling dotenv input errors for a Min/Max pair.
 * dotenv errors handled:
 * - Min/Max swapped (Min larger than Max, Max smaller than Min)
 * - Min larger than default Max when no Max defined
 * - Max smaller than default Min when no Min defined
 *
 * @param environmentMin Min environment variable of Min/Max pair.
 * @param environmentMax Max environment variable of Min/Max pair.
 * @param number Default number. If not set, is `0`.
 */
export function envOrNumberMin(
  environmentMin: string | undefined,
  environmentMax: string | undefined,
  number?: number
) {
  if (environmentMin || environmentMax) {
    if (environmentMin && environmentMax) {
      return Number(
        Number(environmentMin) < Number(environmentMax)
          ? environmentMin
          : environmentMax
      );
    }

    if (environmentMax) {
      return Number(environmentMax) < (number ?? 0)
        ? Number(environmentMax)
        : number ?? 0;
    }

    if (environmentMin) {
      return Number(environmentMin);
    }
  }

  return number ?? 0;
}

/**
 * Returns environment variable, given number, or default number,
 * while handling dotenv input errors for a Min/Max pair.
 * dotenv errors handled:
 * - Min/Max swapped (Min larger than Max, Max smaller than Min)
 * - Min larger than default Max when no Max defined
 * - Max smaller than default Min when no Min defined
 *
 * @param environmentMin Min environment variable of Min/Max pair.
 * @param environmentMax Max environment variable of Min/Max pair.
 * @param number Default number. If not set, is `0`.
 */
export function envOrNumberMax(
  environmentMin: string | undefined,
  environmentMax: string | undefined,
  number?: number
) {
  if (environmentMin || environmentMax) {
    if (environmentMin && environmentMax) {
      return Number(
        Number(environmentMin) < Number(environmentMax)
          ? environmentMax
          : environmentMax
      );
    }

    if (environmentMin) {
      return Number(environmentMin) > (number ?? 0)
        ? Number(environmentMin)
        : number ?? 0;
    }

    if (environmentMax) {
      return Number(environmentMax);
    }
  }

  return number ?? 0;
}