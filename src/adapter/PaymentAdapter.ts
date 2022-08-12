import {ClientCreationOptions} from '../lib/HttpClient';

import ApprovePaymentTransactionsRequest from '../request/ApprovePaymentTransactionsRequest';
import CheckMasterpassUserRequest from '../request/CheckMasterpassUserRequest';
import CompleteThreeDSPaymentRequest from '../request/CompleteThreeDSPaymentRequest';
import CreateDepositPaymentRequest from '../request/CreateDepositPaymentRequest';
import CreateFundTransferDepositPaymentRequest from '../request/CreateFundTransferDepositPaymentRequest';
import CreatePaymentRequest from '../request/CreatePaymentRequest';
import DeleteStoredCardRequest from '../request/DeleteStoredCardRequest';
import DisapprovePaymentTransactionsRequest from '../request/DisapprovePaymentTransactionsRequest';
import InitApmPaymentRequest from '../request/InitApmPaymentRequest';
import InitCheckoutPaymentRequest from '../request/InitCheckoutPaymentRequest';
import InitGarantiPayPaymentRequest from '../request/InitGarantiPayPaymentRequest';
import InitThreeDSPaymentRequest from '../request/InitThreeDSPaymentRequest';
import PostAuthPaymentRequest from '../request/PostAuthPaymentRequest';
import RefundPaymentRequest from '../request/RefundPaymentRequest';
import RefundPaymentTransactionRequest from '../request/RefundPaymentTransactionRequest';
import RetrieveLoyaltiesRequest from '../request/RetrieveLoyaltiesRequest';
import SearchStoredCardsRequest from '../request/SearchStoredCardsRequest';
import StoreCardRequest from '../request/StoreCardRequest';
import UpdateCardRequest from '../request/UpdateCardRequest';
import UpdatePaymentTransactionRequest from '../request/UpdatePaymentTransactionRequest';

import CheckMasterpassUserResponse from '../response/CheckMasterpassUserResponse';
import DataResponse from '../response/DataResponse';
import DepositPaymentResponse from '../response/DepositPaymentResponse';
import InitApmPaymentResponse from '../response/InitApmPaymentResponse';
import InitCheckoutPaymentResponse from '../response/InitCheckoutPaymentResponse';
import InitGarantiPayPaymentResponse from '../response/InitGarantiPayPaymentResponse';
import InitThreeDSPaymentResponse from '../response/InitThreeDSPaymentResponse';
import PaymentRefundResponse from '../response/PaymentRefundResponse';
import PaymentResponse from '../response/PaymentResponse';
import PaymentTransactionApprovalListResponse from '../response/PaymentTransactionApprovalListResponse';
import PaymentTransactionRefundResponse from '../response/PaymentTransactionRefundResponse';
import PaymentTransactionResponse from '../response/PaymentTransactionResponse';
import RetrieveLoyaltiesResponse from '../response/RetrieveLoyaltiesResponse';
import StoredCardResponse from '../response/StoredCardResponse';

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

  async postAuthPayment(paymentId: number, request: PostAuthPaymentRequest): Promise<PaymentResponse> {
    return this._client.post(`/payment/v1/card-payments/${paymentId}/post-auth`, request);
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

  async init3DSDepositPayment(request: CreateDepositPaymentRequest): Promise<InitThreeDSPaymentResponse> {
    return this._client.post('/payment/v1/deposits/3ds-init', request);
  }

  async complete3DSDepositPayment(request: CompleteThreeDSPaymentRequest): Promise<DepositPaymentResponse> {
    return this._client.post('/payment/v1/deposits/3ds-complete', request);
  }

  async createFundTransferDepositPayment(request: CreateFundTransferDepositPaymentRequest): Promise<void> {
    await this._client.post('/payment/v1/deposits/fund-transfer', request);
  }

  async initGarantiPayPayment(request: InitGarantiPayPaymentRequest): Promise<InitGarantiPayPaymentResponse> {
    return this._client.post('/payment/v1/garanti-pay-payments', request);
  }

  async initApmPayment(request: InitApmPaymentRequest): Promise<InitApmPaymentResponse> {
    return this._client.post('/payment/v1/apm-payments/init', request);
  }

  async refundPaymentTransaction(request: RefundPaymentTransactionRequest): Promise<PaymentTransactionRefundResponse> {
    return this._client.post('/payment/v1/refund-transactions', request);
  }

  async retrievePaymentTransactionRefund(paymentTransactionRefundId: number): Promise<PaymentTransactionRefundResponse> {
    return this._client.get(`/payment/v1/refund-transactions/${paymentTransactionRefundId}`);
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

  async updateCard(request: UpdateCardRequest): Promise<StoredCardResponse> {
    return this._client.post('/payment/v1/cards/update', request);
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

  async checkMasterpassUser(request: CheckMasterpassUserRequest): Promise<CheckMasterpassUserResponse> {
    return this._client.post('/payment/v1/masterpass-payments/check-user', request);
  }

  async retrieveLoyalties(request: RetrieveLoyaltiesRequest): Promise<RetrieveLoyaltiesResponse> {
    return this._client.post('/payment/v1/card-loyalties/retrieve', request);
  }

  async updatePaymentTransaction(paymentTransactionId: number, request: UpdatePaymentTransactionRequest): Promise<PaymentTransactionResponse> {
    return this._client.put(`/payment/v1/payment-transactions/${paymentTransactionId}`, request);
  }
}
