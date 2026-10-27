import {ClientCreationOptions} from '../lib/HttpClient';

import BkmExpressGenerateTokenRequest from '../request/BkmExpressGenerateTokenRequest';

import BkmExpressGenerateTokenResponse from '../response/BkmExpressGenerateTokenResponse';

import BaseAdapter from './BaseAdapter';

export default class BkmExpressPaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async generateToken(request: BkmExpressGenerateTokenRequest): Promise<BkmExpressGenerateTokenResponse> {
    return this._client.post('/payment/v2/bkm-express/generate-token', request);
  }
}
