import {ClientCreationOptions} from '../lib/HttpClient';

import ApprovePaymentTransactionsRequest from '../request/ApprovePaymentTransactionsRequest';
import CompleteThreeDSPaymentRequest from '../request/CompleteThreeDSPaymentRequest';
import CreatePaymentRequest from '../request/CreatePaymentRequest';
import DeleteStoredCardRequest from '../request/DeleteStoredCardRequest';
import DisapprovePaymentTransactionsRequest from '../request/DisapprovePaymentTransactionsRequest';
import InitThreeDSPaymentRequest from '../request/InitThreeDSPaymentRequest';
import RefundPaymentRequest from '../request/RefundPaymentRequest';
import RefundPaymentTransactionRequest from '../request/RefundPaymentTransactionRequest';
import SearchPaymentTransactionRefundsRequest from '../request/SearchPaymentTransactionRefundsRequest';
import SearchStoredCardsRequest from '../request/SearchStoredCardsRequest';
import StoreCardRequest from "../request/StoreCardRequest";
import RefundDepositPaymentRequest from "../request/RefundDepositPaymentRequest";
import CreateDepositPaymentRequest from "../request/CreateDepositPaymentRequest";
import InitCheckoutPaymentRequest from "../request/InitCheckoutPaymentRequest";

import DataResponse from '../response/DataResponse';
import InitThreeDSPaymentResponse from '../response/InitThreeDSPaymentResponse';
import PaymentRefundResponse from '../response/PaymentRefundResponse';
import PaymentResponse from '../response/PaymentResponse';
import PaymentTransactionApprovalListResponse from '../response/PaymentTransactionApprovalListResponse';
import PaymentTransactionRefundListResponse from '../response/PaymentTransactionRefundListResponse';
import PaymentTransactionRefundResponse from '../response/PaymentTransactionRefundResponse';
import StoredCardResponse from '../response/StoredCardResponse';
import DepositPaymentResponse from "../response/DepositPaymentResponse";
import DepositPaymentRefundResponse from "../response/DepositPaymentRefundResponse";
import InitCheckoutPaymentResponse from "../response/InitCheckoutPaymentResponse";

import BaseAdapter from './BaseAdapter';

export default class PaymentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createPayment(request: CreatePaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/card-payments', request);
  }

  async retrievePayment(id: number): Promise<PaymentResponse> {
    return this._client.get(`/payment/v1/card-payments/${id}`);
  }

  async init3DSPayment(request: InitThreeDSPaymentRequest): Promise<InitThreeDSPaymentResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-init', request);
  }

  async complete3DSPayment(request: CompleteThreeDSPaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/card-payments/3ds-complete', request);
  }

  async initCheckoutPayment(request: InitCheckoutPaymentRequest): Promise<InitCheckoutPaymentResponse> {
    return this._client.post('/payment/v1/checkout-payments/init', request);
  }

  async retrieveCheckoutPayment(token: string): Promise<PaymentResponse> {
    return this._client.get(`/payment/v1/checkout-payments/${token}`);
  }

  async createDepositPayment(request: CreateDepositPaymentRequest): Promise<DepositPaymentResponse> {
    return this._client.post('/payment/v1/deposits', request);
  }

  async refundDepositPayment(paymentId: number, request: RefundDepositPaymentRequest): Promise<DepositPaymentRefundResponse> {
    return this._client.post(`/payment/v1/deposits/${paymentId}/refunds`, request);
  }

  async init3DSDepositPayment(request: CreateDepositPaymentRequest): Promise<InitThreeDSPaymentResponse> {
    return this._client.post('/payment/v1/deposits/3ds-init', request);
  }

  async complete3DSDepositPayment(request: CompleteThreeDSPaymentRequest): Promise<DepositPaymentResponse> {
    return this._client.post('/payment/v1/deposits/3ds-complete', request);
  }

  async refundPaymentTransaction(request: RefundPaymentTransactionRequest): Promise<PaymentTransactionRefundResponse> {
    return this._client.post('/payment/v1/refund-transactions', request);
  }

  async retrievePaymentTransactionRefund(paymentTransactionRefundId: number): Promise<PaymentTransactionRefundResponse> {
    return this._client.get(`/payment/v1/refund-transactions/${paymentTransactionRefundId}`);
  }

  async searchPaymentTransactionRefunds(request: SearchPaymentTransactionRefundsRequest): Promise<PaymentTransactionRefundListResponse> {
    return this._client.get('/payment/v1/refund-transactions', request);
  }

  async refundPayment(request: RefundPaymentRequest): Promise<PaymentRefundResponse> {
    return this._client.post('/payment/v1/refunds', request);
  }

  async retrievePaymentRefund(refundId: number): Promise<PaymentRefundResponse> {
    return this._client.get(`/payment/v1/refunds/${refundId}`);
  }

  async storeCard(request: StoreCardRequest): Promise<StoredCardResponse> {
    return this._client.post('/payment/v1/cards', request);
  }

  async searchStoredCards(request: SearchStoredCardsRequest): Promise<DataResponse<StoredCardResponse>> {
    return this._client.get('/payment/v1/cards', request);
  }

  async deleteStoredCard(request: DeleteStoredCardRequest): Promise<void> {
    await this._client.delete('/payment/v1/cards', request);
  }

  async approvePaymentTransactions(request: ApprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/payment/v1/payment-transactions/approve', request);
  }

  async disapprovePaymentTransactions(request: DisapprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/payment/v1/payment-transactions/disapprove', request);
  }
}
