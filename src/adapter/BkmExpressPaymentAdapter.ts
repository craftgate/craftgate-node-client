import {ClientCreationOptions} from '../lib/HttpClient';

import CompleteBkmExpressRequest from '../request/CompleteBkmExpressRequest';
import InitBkmExpressRequest from '../request/InitBkmExpressRequest';

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

  async retrievePayment(ticketId: string): Promise<ReportingPaymentResponse> {
    return this._client.get(`/payment/v1/bkm-express/payments/${ticketId}`);
  }
}
