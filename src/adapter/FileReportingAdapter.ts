import {ClientCreationOptions} from '../lib/HttpClient';

import RetrieveDailyTransactionReportRequest from '../request/RetrieveDailyTransactionReportRequest';

import BaseAdapter from './BaseAdapter';

export default class FileReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async retrieveDailyTransactionReport(request: RetrieveDailyTransactionReportRequest): Promise<ArrayBuffer> {
    return this._client.get<ArrayBuffer>('/file-reporting/v1/transaction-reports', request, {responseType: 'arraybuffer'});
  }
}
