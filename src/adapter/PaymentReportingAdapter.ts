import {ClientCreationOptions} from '../lib/HttpClient';

import SearchPaymentRefundsRequest from '../request/SearchPaymentRefundsRequest';
import SearchPaymentsRequest from '../request/SearchPaymentsRequest';
import SearchPaymentTransactionRefundsRequest from '../request/SearchPaymentTransactionRefundsRequest';

import DataResponse from '../response/DataResponse';
import ReportingPaymentTransaction from '../response/dto/ReportingPaymentTransaction';
import ReportingPaymentRefundResponse from '../response/ReportingPaymentRefundResponse';
import ReportingPaymentResponse from '../response/ReportingPaymentResponse';
import ReportingPaymentTransactionRefundResponse from '../response/ReportingPaymentTransactionRefundResponse';

import BaseAdapter from './BaseAdapter';

export default class PaymentReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchPayments(request: SearchPaymentsRequest): Promise<DataResponse<ReportingPaymentResponse>> {
    return this._client.get('/payment-reporting/v1/payments', request);
  }

  async retrievePayment(paymentId: number): Promise<ReportingPaymentResponse> {
    return this._client.get(`/payment-reporting/v1/payments/${paymentId}`);
  }

  async retrievePaymentTransactions(paymentId: number): Promise<DataResponse<ReportingPaymentTransaction>> {
    return this._client.get(`/payment-reporting/v1/payments/${paymentId}/transactions`);
  }

  async retrievePaymentRefunds(paymentId: number): Promise<DataResponse<ReportingPaymentRefundResponse>> {
    return this._client.get(`/payment-reporting/v1/payments/${paymentId}/refunds`);
  }

  async retrievePaymentTransactionRefunds(paymentId: number, paymentTransactionId: number): Promise<DataResponse<ReportingPaymentTransactionRefundResponse>> {
    return this._client.get(`/payment-reporting/v1/payments/${paymentId}/transactions/${paymentTransactionId}/refunds`);
  }

  async searchPaymentRefunds(request: SearchPaymentRefundsRequest): Promise<DataResponse<ReportingPaymentRefundResponse>> {
    return this._client.get('/payment-reporting/v1/refunds', request);
  }

  async searchPaymentTransactionRefunds(request: SearchPaymentTransactionRefundsRequest): Promise<DataResponse<ReportingPaymentTransactionRefundResponse>> {
    return this._client.get('/payment-reporting/v1/refund-transactions', request);
  }
}
