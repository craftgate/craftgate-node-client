import {ClientCreationOptions} from '../lib/HttpClient';

import InitJuzdanPaymentRequest from '../request/InitJuzdanPaymentRequest';

import InitJuzdanPaymentResponse from '../response/InitJuzdanPaymentResponse';
import PaymentResponse from '../response/PaymentResponse';

import BaseAdapter from './BaseAdapter';

export default class JuzdanPaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async initJuzdanPayment(request: InitJuzdanPaymentRequest): Promise<InitJuzdanPaymentResponse> {
    return this._client.post('/payment/v1/juzdan-payments/init', request);
  }

  async retrieveJuzdanPayment(referenceId: string): Promise<PaymentResponse> {
    return this._client.get(`/payment/v1/juzdan-payments/${referenceId}`);
  }
}
