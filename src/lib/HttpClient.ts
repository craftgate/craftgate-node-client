import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import CraftgateError from '../CraftgateError';

import {calculateSignature, generateRandomString, getAbsoluteUrl, serializeParams} from './utils';

export type ClientOptions = {
  apiKey: string;
  secretKey: string;
  baseUrl: string;
  language: string;
};

export type ClientCreationOptions = Partial<ClientOptions>;

type CraftgateApiResponse<T> = {
  data?: T;
  errors?: {
    errorCode: string;
    errorDescription: string;
  };
};

type AxiosCraftgateApiResponse<T> = AxiosResponse<CraftgateApiResponse<T>>;

const API_KEY_HEADER_NAME = 'x-api-key';
const RANDOM_HEADER_NAME = 'x-rnd-key';
const AUTH_VERSION_HEADER_NAME = 'x-auth-version';
const CLIENT_VERSION_HEADER_NAME = 'x-client-version';
const SIGNATURE_HEADER_NAME = 'x-signature';
const LANGUAGE_HEADER_NAME = 'lang';

export class HttpClient {
  private readonly _client: AxiosInstance;
  private readonly _options: ClientOptions;

  constructor({apiKey, secretKey, baseUrl = 'https://sandbox-api.craftgate.io', language = null}: ClientCreationOptions = {}) {
    this._options = {apiKey, secretKey, baseUrl, language};
    this._client = axios.create({baseURL: baseUrl});
    this._client.defaults.timeout = 150000;

    this._client.interceptors.request.use(this._injectHeaders.bind(this));
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

  private _injectHeaders(config: AxiosRequestConfig): AxiosRequestConfig {
    const randomStr: string = generateRandomString();

    config.headers[API_KEY_HEADER_NAME] = this._options.apiKey;
    config.headers[RANDOM_HEADER_NAME] = randomStr;
    config.headers[AUTH_VERSION_HEADER_NAME] = '1';
    config.headers[CLIENT_VERSION_HEADER_NAME] = 'craftgate-node-client:1.0.34';
    if (this._options.language) {
      config.headers[LANGUAGE_HEADER_NAME] = this._options.language;
    }
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

    const method: string = (config.method || '').toLowerCase();
    if (method === 'put' || method === 'post' || method === 'patch') {
      config.data = requestBody;
    }

    return config;
  }

  private async _executeRequest<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<CraftgateApiResponse<T>> = await this._client(config);
      return config.responseType === 'arraybuffer' ? (response.data as T) : response.data.data;
    } catch (err) {
      if (err && err.response) {
        this._handleBusinessErrors(err.response, config);
      }

      throw err;
    }
  }

  /**
   * Attempts to handle any errors received from the API, throwing a {@link CraftgateError} if necessary
   *
   * @param response the response
   * @param config axios request config
   */
  private _handleBusinessErrors(response: AxiosCraftgateApiResponse<any>, config: AxiosRequestConfig) {
    if (config.responseType === 'arraybuffer') {
      response.data = JSON.parse(response.data.toString());
    }

    if (response?.data?.errors) {
      throw new CraftgateError(response.data.errors);
    }
  }
}
