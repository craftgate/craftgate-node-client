import {ClientCreationOptions} from '../lib/HttpClient';

import SearchBankAccountTrackingRecordsRequest from '../request/SearchBankAccountTrackingRecordsRequest';

import BankAccountTrackingRecordResponse from '../response/BankAccountTrackingRecordResponse';
import DataResponse from '../response/DataResponse';

import BaseAdapter from './BaseAdapter';

export default class BankAccountTrackingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchRecords(request: SearchBankAccountTrackingRecordsRequest): Promise<DataResponse<BankAccountTrackingRecordResponse>> {
    return this._client.get('/bank-account-tracking/v1/merchant-bank-account-trackings/records', request);
  }
}
