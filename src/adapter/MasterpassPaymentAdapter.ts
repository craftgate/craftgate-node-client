import {ClientCreationOptions} from '../lib/HttpClient';

import CheckMasterpassUserRequest from '../request/CheckMasterpassUserRequest';
import MasterpassPaymentCompleteRequest from '../request/MasterpassPaymentCompleteRequest';
import MasterpassPaymentThreeDSCompleteRequest from '../request/MasterpassPaymentThreeDSCompleteRequest';
import MasterpassPaymentThreeDSInitRequest from '../request/MasterpassPaymentThreeDSInitRequest';
import MasterpassPaymentTokenGenerateRequest from '../request/MasterpassPaymentTokenGenerateRequest';

import CheckMasterpassUserResponse from '../response/CheckMasterpassUserResponse';
import MasterpassPaymentThreeDSInitResponse from '../response/MasterpassPaymentThreeDSInitResponse';
import MasterpassPaymentTokenGenerateResponse from '../response/MasterpassPaymentTokenGenerateResponse';
import PaymentResponse from '../response/PaymentResponse';

import BaseAdapter from './BaseAdapter';

export default class MasterpassPaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async checkMasterpassUser(request: CheckMasterpassUserRequest): Promise<CheckMasterpassUserResponse> {
    return this._client.post('/payment/v1/masterpass-payments/check-user', request);
  }

  async generateMasterpassPaymentToken(request: MasterpassPaymentTokenGenerateRequest): Promise<MasterpassPaymentTokenGenerateResponse> {
    return this._client.post(`/payment/v2/masterpass-payments/generate-token`, request);
  }

  async completeMasterpassPayment(request: MasterpassPaymentCompleteRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v2/masterpass-payments/complete', request);
  }

  async init3DSMasterpassPayment(request: MasterpassPaymentThreeDSInitRequest): Promise<MasterpassPaymentThreeDSInitResponse> {
    return this._client.post('/payment/v2/masterpass-payments/3ds-init', request);
  }

  async complete3DSMasterpassPayment(request: MasterpassPaymentThreeDSCompleteRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v2/masterpass-payments/3ds-complete', request);
  }
}
