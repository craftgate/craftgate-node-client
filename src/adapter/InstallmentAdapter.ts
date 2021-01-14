import {ClientCreationOptions} from '../lib/HttpClient';

import SearchInstallmentsRequest from '../request/SearchInstallmentsRequest';

import BinNumberResponse from '../response/BinNumberResponse';
import InstallmentListResponse from '../response/InstallmentListResponse';

import BaseAdapter from './BaseAdapter';

export default class InstallmentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchInstallments(request: SearchInstallmentsRequest): Promise<InstallmentListResponse> {
    return this._client.get('/installment/v1/installments', request);
  }

  async retrieveBinNumber(binNumber: string): Promise<BinNumberResponse> {
    return this._client.get(`/installment/v1/bins/${binNumber}`);
  }
}
