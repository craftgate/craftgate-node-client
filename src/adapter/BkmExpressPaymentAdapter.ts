import {ClientCreationOptions} from '../lib/HttpClient';

import BkmExpressGenerateTokenRequest from '../request/BkmExpressGenerateTokenRequest';
import CompleteBkmExpressRequest from '../request/CompleteBkmExpressRequest';
import InitBkmExpressRequest from '../request/InitBkmExpressRequest';

import BkmExpressGenerateTokenResponse from '../response/BkmExpressGenerateTokenResponse';
import InitBkmExpressResponse from '../response/InitBkmExpressResponse';
import PaymentResponse from '../response/PaymentResponse';
import ReportingPaymentResponse from '../response/ReportingPaymentResponse';

import BaseAdapter from './BaseAdapter';

export default class BkmExpressPaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async init(request: InitBkmExpressRequest): Promise<InitBkmExpressResponse> {
    return this._client.post('/payment/v1/bkm-express/init', request);
  }

  async complete(request: CompleteBkmExpressRequest): Promise<PaymentResponse> {
    return this._client.post(`/payment/v1/bkm-express/complete`, request);
  }

  async retrievePaymentByToken(token: string): Promise<ReportingPaymentResponse> {
    return this._client.get(`/payment/v1/bkm-express/${token}`);
  }

  async generateToken(request: BkmExpressGenerateTokenRequest): Promise<BkmExpressGenerateTokenResponse> {
    return this._client.post('/payment/v2/bkm-express/generate-token', request);
  }
}
