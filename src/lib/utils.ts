import crypto from 'crypto-js';

/**
 * Generates a random alphanumberic string of the given length.
 *
 * @param length (default: 6) the length of the string to generate
 */
export function generateRandomString(length = 6): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return new Array(length)
    .fill(0)
    .map(() => Math.floor(Math.random() * alphabet.length))
    .map(i => alphabet[i])
    .join('');
}

/**
 * Calculates the PKI signature using the provided set of components.
 *
 * @param components the components to calculate the signature from
 */
export function calculateSignature({apiKey, secretKey, url, body, randomStr}: {apiKey: string; secretKey: string; url: string; randomStr: string; body?: string}): string {
  const hashStr: string = [url, apiKey, secretKey, randomStr, body].filter(s => !!s).join('');
  const hash = crypto.SHA256(hashStr);
  return crypto.enc.Base64.stringify(hash).toUpperCase();
}

/**
 * Creates an absolute URL by combining a base URL with a relative part, preventing duplicate slashes from being produced.
 *
 * @param baseUrl the base URL
 * @param relativeUrl (optional) the relative part of the URL
 */
export function getAbsoluteUrl(baseUrl: string, relativeUrl?: string): string {
  if (!relativeUrl) {
    return baseUrl;
  }

  return baseUrl.replace(/\/+$/g, '') + '/' + relativeUrl.replace(/^\/+/g, '');
}

/**
 * Returns whether or not the provided value is an array
 *
 * @param value the value
 */
export function isArray(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * Returns the URL-encoded string representation of a value. If the provided value is null or undefined, returns an empty string.
 *
 * @param value the value
 */
export function getEncodedStringValue(value: any): string {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  if (value instanceof Date) {
    return encodeURIComponent(value.toISOString());
  }

  return encodeURIComponent(value);
}

/**
 * Serializes an object as a query string, using unbracketed keys for array values.
 *
 * @param params the params object
 */
export function serializeParams(params: any): string {
  return Object.keys(params)
    .reduce((acc: Array<string>, key: string) => {
      const value: any = params[key];
      const encodedKey = encodeURIComponent(key);

      if (isArray(value)) {
        const stringValue = value
          .map(getEncodedStringValue)
          .map((value: string) => `${encodedKey}=${value}`)
          .join('&');

        return acc.concat(stringValue);
      }

      const stringValue = getEncodedStringValue(value);
      return acc.concat(`${encodedKey}=${stringValue}`);
    }, [])
    .join('&');
}
