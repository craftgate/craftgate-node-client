import {ClientCreationOptions} from '../lib/HttpClient';

import BaseAdapter from './BaseAdapter';
import RetrieveDailyTransactionReportRequest from '../request/RetrieveDailyTransactionReportRequest';

export default class FileReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async retrieveDailyTransactionReport(request: RetrieveDailyTransactionReportRequest): Promise<ArrayBuffer> {
    return this._client.get<ArrayBuffer>('/file-reporting/v1/transaction-reports', request, {responseType: 'arraybuffer'});
  }
}
