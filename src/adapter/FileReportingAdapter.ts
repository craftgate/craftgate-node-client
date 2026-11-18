import {ClientCreationOptions} from '../lib/HttpClient';

import CreateReportFromTemplateRequest from '../request/CreateReportFromTemplateRequest';
import CreateReportRequest from '../request/CreateReportRequest';
import RetrieveDailyPaymentReportRequest from '../request/RetrieveDailyPaymentReportRequest';
import RetrieveDailyTransactionReportRequest from '../request/RetrieveDailyTransactionReportRequest';
import RetrieveReportRequest from '../request/RetrieveReportRequest';

import ReportDemandResponse from '../response/ReportDemandResponse';
import ReportFromTemplateResponse from '../response/ReportFromTemplateResponse';

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

  async createReport(request: CreateReportRequest): Promise<ReportDemandResponse> {
    return this._client.post('/file-reporting/v1/report-demands', request);
  }

  async createReportFromTemplate(templateId: number, request: CreateReportFromTemplateRequest): Promise<ReportFromTemplateResponse> {
    return this._client.post('/file-reporting/v1/report-templates/' + templateId + '/reports', request);
  }

  async retrieveReport(request: RetrieveReportRequest, reportId: number): Promise<ArrayBuffer> {
    return this._client.get<ArrayBuffer>('/file-reporting/v1/reports/' + reportId, request, {responseType: 'arraybuffer'});
  }
}
