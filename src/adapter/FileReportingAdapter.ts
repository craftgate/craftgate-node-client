import CreateReportRequest from '../request/CreateReportRequest';
import {ClientCreationOptions} from '../lib/HttpClient';

import RetrieveDailyPaymentReportRequest from '../request/RetrieveDailyPaymentReportRequest';
import RetrieveDailyTransactionReportRequest from '../request/RetrieveDailyTransactionReportRequest';

import BaseAdapter from './BaseAdapter';
import ReportDemandResponse from '../response/ReportDemandResponse';
import RetrieveReportRequest from '../request/RetrieveReportRequest';

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

  async createReport(request: CreateReportRequest): Promise<ReportDemandResponse> {
    return this._client.post('/file-reporting/v1/report-demands', request);
  }

  async retrieveReport(request: RetrieveReportRequest, reportId: Number): Promise<ArrayBuffer> {
    return this._client.get<ArrayBuffer>('/file-reporting/v1/reports/' + reportId, request, {responseType: 'arraybuffer'});
  }
}
