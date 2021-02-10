import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import CraftgateError from '../CraftgateError';

import {calculateSignature, generateRandomString, getAbsoluteUrl, serializeParams} from './utils';

export type ClientOptions = {
  apiKey: string;
  secretKey: string;
  baseUrl: string;
};

export type ClientCreationOptions = Partial<ClientOptions>;

const API_KEY_HEADER_NAME = 'x-api-key';
const RANDOM_HEADER_NAME = 'x-rnd-key';
const AUTH_VERSION_HEADER_NAME = 'x-auth-version';
const SIGNATURE_HEADER_NAME = 'x-signature';

export class HttpClient {
  private readonly _client: AxiosInstance;
  private readonly _options: ClientOptions;

  constructor({apiKey, secretKey, baseUrl = 'https://sandbox-api.craftgate.io'}: ClientCreationOptions = {}) {
    this._options = {apiKey, secretKey, baseUrl};
    this._client = axios.create({baseURL: baseUrl});
    this._client.defaults.timeout = 150000;

    this._client.interceptors.request.use(this._injectHeaders.bind(this));
  }

  private _injectHeaders(config: AxiosRequestConfig): AxiosRequestConfig {
    const randomStr: string = generateRandomString();

    config.headers[API_KEY_HEADER_NAME] = this._options.apiKey;
    config.headers[RANDOM_HEADER_NAME] = randomStr;
    config.headers[AUTH_VERSION_HEADER_NAME] = '1';
    config.maxRedirects = 0;

    const requestBody: string | null = config.data ? JSON.stringify(config.data, null, 0) : null;

    if (!config.paramsSerializer) {
      config.paramsSerializer = serializeParams;
    }

    const fullUrl = getAbsoluteUrl(this._options.baseUrl, decodeURIComponent(this._client.getUri(config)));
    const signature: string = calculateSignature({
      apiKey: this._options.apiKey,
      secretKey: this._options.secretKey,
      randomStr,
      url: fullUrl,
      body: requestBody
    });
    config.headers[SIGNATURE_HEADER_NAME] = signature;
    config.headers['Content-Type'] = 'application/json';

    config.data = requestBody;

    return config;
  }

  private async _executeRequest<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse = await this._client(config);
      this._handleBusinessErrors(response);
      return response.data.data;
    } catch (err) {
      if (err && err.response) {
        this._handleBusinessErrors(err.response);
      }

      throw err;
    }
  }

  /**
   * Attempts to handle any errors received from the API, throwing a {@link CraftgateError} if necessary
   *
   * @param response the response
   */
  private _handleBusinessErrors(response: AxiosResponse) {
    if (!response || !response.data || !response.data.errors) {
      return;
    }

    throw new CraftgateError(response.data.errors);
  }

  async get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this._executeRequest({
      url,
      params,
      method: 'GET',
      ...config
    });
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this._executeRequest({
      url,
      data,
      method: 'PUT',
      ...config
    });
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this._executeRequest({
      url,
      data,
      method: 'POST',
      ...config
    });
  }

  async delete<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this._executeRequest({
      url,
      params,
      method: 'DELETE',
      ...config
    });
  }
}
