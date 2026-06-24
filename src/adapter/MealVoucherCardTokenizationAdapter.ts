import {ClientCreationOptions} from '../lib/HttpClient';

import InitMealVoucherCardTokenizationRequest from '../request/InitMealVoucherCardTokenizationRequest';
import MealVoucherCardTokenizationCompleteRequest from '../request/MealVoucherCardTokenizationCompleteRequest';
import MealVoucherCardTokenizationRegenerateRequest from '../request/MealVoucherCardTokenizationRegenerateRequest';

import InitMealVoucherCardTokenizationResponse from '../response/InitMealVoucherCardTokenizationResponse';
import MealVoucherCardTokenizationCompleteResponse from '../response/MealVoucherCardTokenizationCompleteResponse';

import BaseAdapter from './BaseAdapter';

export default class MealVoucherCardTokenizationAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async init(request: InitMealVoucherCardTokenizationRequest): Promise<InitMealVoucherCardTokenizationResponse> {
    return this._client.post('/payment/v1/meal-voucher/card-tokenizations/init', request);
  }

  async regenerate(sessionId: string, request: MealVoucherCardTokenizationRegenerateRequest): Promise<InitMealVoucherCardTokenizationResponse> {
    return this._client.post(`/payment/v1/meal-voucher/card-tokenizations/${sessionId}/regenerate`, request);
  }

  async complete(sessionId: string, request: MealVoucherCardTokenizationCompleteRequest): Promise<MealVoucherCardTokenizationCompleteResponse> {
    return this._client.post(`/payment/v1/meal-voucher/card-tokenizations/${sessionId}/complete`, request);
  }
}
