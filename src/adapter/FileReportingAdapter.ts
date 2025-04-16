import {ClientCreationOptions} from '../lib/HttpClient';

import RetrieveDailyPaymentReportRequest from '../request/RetrieveDailyPaymentReportRequest';
import RetrieveDailyTransactionReportRequest from '../request/RetrieveDailyTransactionReportRequest';

import BaseAdapter from './BaseAdapter';

export default class FileReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async retrieveDailyTransactionReport(request: RetrieveDailyTransactionReportRequest): Promise<ArrayBuffer> {
    return this._client.get<ArrayBuffer>('/file-reporting/v1/transaction-reports', request, {responseType: 'arraybuffer'});
  }

  async retrieveDailyPaymentReport(request: RetrieveDailyPaymentReportRequest): Promise<ArrayBuffer> {
    return this._client.get<ArrayBuffer>('/file-reporting/v1/payment-reports', request, {responseType: 'arraybuffer'});
  }
}
