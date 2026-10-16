const UNKNOWN_VERSION = 'unknown';

// package.json keeps this placeholder on master; the release workflow replaces it with the version of the release tag.
export const DEVELOPMENT_VERSION = '0.0.0-development';

export function resolveClientVersion(packageVersion?: string): string {
  return !packageVersion || packageVersion === DEVELOPMENT_VERSION ? UNKNOWN_VERSION : packageVersion;
}

// The same path from src/lib and dist/lib, and package.json is always part of the published package.
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const CLIENT_VERSION: string = resolveClientVersion(require('../../package.json').version);
