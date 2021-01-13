import {ClientCreationOptions, HttpClient} from '../lib/HttpClient';

export default class BaseAdapter {
  protected _client: HttpClient;

  constructor(clientOptions: ClientCreationOptions) {
    this._client = new HttpClient(clientOptions);
  }
}
