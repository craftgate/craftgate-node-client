import {ClientCreationOptions} from '../lib/HttpClient';

import RetrieveDailyPaymentReportRequest from '../request/RetrieveDailyPaymentReportRequest';
import RetrieveDailyTransactionReportRequest from '../request/RetrieveDailyTransactionReportRequest';

import DataResponse from '../response/DataResponse';
import MerchantApmResponse from '../response/MerchantApmResponse';
import WalletResponse from '../response/WalletResponse';

import BaseAdapter from './BaseAdapter';

export default class MerchantApmAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async retrieveApms(): Promise<DataResponse<MerchantApmResponse>> {
    return this._client.get('/merchant/v1/merchant-apms');
  }
}
