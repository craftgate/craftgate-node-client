import {ClientCreationOptions} from '../lib/HttpClient';
import {calculateHash} from '../lib/utils';

import ApplePayMerchantSessionCreateRequest from '../request/ApplePayMerchantSessionCreateRequest';
import ApprovePaymentTransactionsRequest from '../request/ApprovePaymentTransactionsRequest';
import BnplPaymentOfferRequest from '../request/BnplPaymentOfferRequest';
import CloneCardRequest from '../request/CloneCardRequest';
import CompleteApmPaymentRequest from '../request/CompleteApmPaymentRequest';
import CompletePosApmPaymentRequest from '../request/CompletePosApmPaymentRequest';
import CompleteThreeDSPaymentRequest from '../request/CompleteThreeDSPaymentRequest';
import CreateApmPaymentRequest from '../request/CreateApmPaymentRequest';
import CreateDepositPaymentRequest from '../request/CreateDepositPaymentRequest';
import CreateFundTransferDepositPaymentRequest from '../request/CreateFundTransferDepositPaymentRequest';
import CreatePaymentRequest from '../request/CreatePaymentRequest';
import DeleteStoredCardRequest from '../request/DeleteStoredCardRequest';
import DisapprovePaymentTransactionsRequest from '../request/DisapprovePaymentTransactionsRequest';
import InitApmDepositPaymentRequest from '../request/InitApmDepositPaymentRequest';
import InitApmPaymentRequest from '../request/InitApmPaymentRequest';
import InitBnplPaymentRequest from '../request/InitBnplPaymentRequest';
import InitCheckoutCardVerifyRequest from '../request/InitCheckoutCardVerifyRequest';
import InitCheckoutPaymentRequest from '../request/InitCheckoutPaymentRequest';
import InitGarantiPayPaymentRequest from '../request/InitGarantiPayPaymentRequest';
import InitMultiPaymentRequest from '../request/InitMultiPaymentRequest';
import InitPosApmPaymentRequest from '../request/InitPosApmPaymentRequest';
import InitThreeDSPaymentRequest from '../request/InitThreeDSPaymentRequest';
import PostAuthPaymentRequest from '../request/PostAuthPaymentRequest';
import RefundPaymentRequest from '../request/RefundPaymentRequest';
import RefundPaymentTransactionMarkAsRefundedRequest from '../request/RefundPaymentTransactionMarkAsRefundedRequest';
import RefundPaymentTransactionRequest from '../request/RefundPaymentTransactionRequest';
import RefundWaitingPaymentRequest from '../request/RefundWaitingPaymentRequest';
import RetrieveLoyaltiesRequest from '../request/RetrieveLoyaltiesRequest';
import RetrieveProviderCardRequest from '../request/RetrieveProviderCardRequest';
import SearchStoredCardsRequest from '../request/SearchStoredCardsRequest';
import StoreCardRequest from '../request/StoreCardRequest';
import UpdateCardRequest from '../request/UpdateCardRequest';
import UpdatePaymentTransactionRequest from '../request/UpdatePaymentTransactionRequest';
import VerifyCardRequest from '../request/VerifyCardRequest';

import ApmDepositPaymentResponse from '../response/ApmDepositPaymentResponse';
import BnplPaymentOfferResponse from '../response/BnplPaymentOfferResponse';
import BnplPaymentVerifyResponse from '../response/BnplPaymentVerifyResponse';
import CompleteApmPaymentResponse from '../response/CompleteApmPaymentResponse';
import DataResponse from '../response/DataResponse';
import DepositPaymentResponse from '../response/DepositPaymentResponse';
import FundTransferDepositPaymentResponse from '../response/FundTransferDepositPaymentResponse';
import InitApmPaymentResponse from '../response/InitApmPaymentResponse';
import InitBnplPaymentResponse from '../response/InitBnplPaymentResponse';
import InitCheckoutCardVerifyResponse from '../response/InitCheckoutCardVerifyResponse';
import InitCheckoutPaymentResponse from '../response/InitCheckoutPaymentResponse';
import InitGarantiPayPaymentResponse from '../response/InitGarantiPayPaymentResponse';
import InitMultiPaymentResponse from '../response/InitMultipaymentPaymentResponse';
import InitPosApmPaymentResponse from '../response/InitPosApmPaymentResponse';
import InitThreeDSPaymentResponse from '../response/InitThreeDSPaymentResponse';
import InstantTransferBanksResponse from '../response/InstantTransferBanksResponse';
import MultiPaymentResponse from '../response/MultiPaymentResponse';
import PaymentRefundResponse from '../response/PaymentRefundResponse';
import PaymentResponse from '../response/PaymentResponse';
import PaymentTransactionApprovalListResponse from '../response/PaymentTransactionApprovalListResponse';
import PaymentTransactionRefundListResponse from '../response/PaymentTransactionRefundListResponse';
import PaymentTransactionRefundResponse from '../response/PaymentTransactionRefundResponse';
import PaymentTransactionResponse from '../response/PaymentTransactionResponse';
import RetrieveCheckoutCardVerifyResponse from '../response/RetrieveCheckoutCardVerifyResponse';
import RetrieveLoyaltiesResponse from '../response/RetrieveLoyaltiesResponse';
import StoredCardResponse from '../response/StoredCardResponse';
import VerifyCardResponse from '../response/VerifyCardResponse';
import WaitingPaymentRefundResponse from '../response/WaitingPaymentRefundResponse';

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

  async initCheckoutCardVerify(request: InitCheckoutCardVerifyRequest): Promise<InitCheckoutCardVerifyResponse> {
    return this._client.post('/payment/v1/checkout-card-verify/init', request);
  }

  async retrieveCheckoutCardVerify(token: string): Promise<RetrieveCheckoutCardVerifyResponse> {
    return this._client.get(`/payment/v1/checkout-card-verify/${token}`);
  }

  async retrieveCheckoutPayment(token: string): Promise<PaymentResponse> {
    return this._client.get(`/payment/v1/checkout-payments/${token}`);
  }

  async expireCheckoutPayment(token: string): Promise<void> {
    await this._client.delete(`/payment/v1/checkout-payments/${token}`);
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

  async createFundTransferDepositPayment(request: CreateFundTransferDepositPaymentRequest): Promise<FundTransferDepositPaymentResponse> {
    return this._client.post('/payment/v1/deposits/fund-transfer', request);
  }

  async initApmDepositPayment(request: InitApmDepositPaymentRequest): Promise<ApmDepositPaymentResponse> {
    return this._client.post('/payment/v1/deposits/apm-init', request);
  }

  async initGarantiPayPayment(request: InitGarantiPayPaymentRequest): Promise<InitGarantiPayPaymentResponse> {
    return this._client.post('/payment/v1/garanti-pay-payments', request);
  }

  async initApmPayment(request: InitApmPaymentRequest): Promise<InitApmPaymentResponse> {
    return this._client.post('/payment/v1/apm-payments/init', request);
  }

  async completeApmPayment(request: CompleteApmPaymentRequest): Promise<CompleteApmPaymentResponse> {
    return this._client.post('/payment/v1/apm-payments/complete', request);
  }

  async createApmPayment(request: CreateApmPaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/apm-payments', request);
  }

  async initPosApmPayment(request: InitPosApmPaymentRequest): Promise<InitPosApmPaymentResponse> {
    return this._client.post('/payment/v1/pos-apm-payments/init', request);
  }

  async completePosApmPayment(request: CompletePosApmPaymentRequest): Promise<PaymentResponse> {
    return this._client.post('/payment/v1/pos-apm-payments/complete', request);
  }

  async refundPaymentTransaction(request: RefundPaymentTransactionRequest): Promise<PaymentTransactionRefundResponse> {
    return this._client.post('/payment/v1/refund-transactions', request);
  }

  async retrievePaymentTransactionRefund(paymentTransactionRefundId: number): Promise<PaymentTransactionRefundResponse> {
    return this._client.get(`/payment/v1/refund-transactions/${paymentTransactionRefundId}`);
  }

  async refundPaymentTransactionMarkAsRefunded(request: RefundPaymentTransactionMarkAsRefundedRequest): Promise<PaymentTransactionRefundResponse> {
    return this._client.post('/payment/v1/refund-transactions/mark-as-refunded', request);
  }

  async refundPayment(request: RefundPaymentRequest): Promise<PaymentRefundResponse> {
    return this._client.post('/payment/v1/refunds', request);
  }

  async refundWaitingPayment(request: RefundWaitingPaymentRequest): Promise<WaitingPaymentRefundResponse> {
    return this._client.post('/payment/v1/refunds/refund-waiting-payment', request);
  }

  async retrievePaymentRefund(refundId: number): Promise<PaymentRefundResponse> {
    return this._client.get(`/payment/v1/refunds/${refundId}`);
  }

  async refundPaymentMarkAsRefunded(request: RefundPaymentRequest): Promise<PaymentTransactionRefundListResponse> {
    return this._client.post('/payment/v1/refunds/mark-as-refunded', request);
  }

  async storeCard(request: StoreCardRequest): Promise<StoredCardResponse> {
    return this._client.post('/payment/v1/cards', request);
  }

  async updateCard(request: UpdateCardRequest): Promise<StoredCardResponse> {
    return this._client.post('/payment/v1/cards/update', request);
  }

  async cloneCard(request: CloneCardRequest): Promise<StoredCardResponse> {
    return this._client.post('/payment/v1/cards/clone', request);
  }

  async searchStoredCards(request: SearchStoredCardsRequest): Promise<DataResponse<StoredCardResponse>> {
    return this._client.get('/payment/v1/cards', request);
  }

  async deleteStoredCard(request: DeleteStoredCardRequest): Promise<void> {
    await this._client.post('/payment/v1/cards/delete', request);
  }

  async verifyCard(request: VerifyCardRequest): Promise<VerifyCardResponse> {
    return this._client.post('/payment/v1/cards/verify', request);
  }

  async approvePaymentTransactions(request: ApprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/payment/v1/payment-transactions/approve', request);
  }

  async disapprovePaymentTransactions(request: DisapprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/payment/v1/payment-transactions/disapprove', request);
  }

  async retrieveLoyalties(request: RetrieveLoyaltiesRequest): Promise<RetrieveLoyaltiesResponse> {
    return this._client.post('/payment/v1/card-loyalties/retrieve', request);
  }

  async updatePaymentTransaction(paymentTransactionId: number, request: UpdatePaymentTransactionRequest): Promise<PaymentTransactionResponse> {
    return this._client.put(`/payment/v1/payment-transactions/${paymentTransactionId}`, request);
  }

  async createApplePayMerchantSession(request: ApplePayMerchantSessionCreateRequest): Promise<any> {
    return this._client.post(`/payment/v1/apple-pay/merchant-sessions`, request);
  }

  async retrieveBnplOffers(request: BnplPaymentOfferRequest): Promise<BnplPaymentOfferResponse> {
    return this._client.post(`/payment/v1/bnpl-payments/offers`, request);
  }

  async initBnplPayment(request: InitBnplPaymentRequest): Promise<InitBnplPaymentResponse> {
    return this._client.post(`/payment/v1/bnpl-payments/init`, request);
  }

  async approveBnplPayment(paymentId: number): Promise<PaymentResponse> {
    return this._client.post(`/payment/v1/bnpl-payments/${paymentId}/approve`);
  }

  async verifyBnplPayment(paymentId: number): Promise<BnplPaymentVerifyResponse> {
    return this._client.post(`/payment/v1/bnpl-payments/${paymentId}/verify`);
  }

  async retrieveActiveBanks(): Promise<InstantTransferBanksResponse> {
    return this._client.get(`/payment/v1/instant-transfer-banks`);
  }

  async initMultiPayment(request: InitMultiPaymentRequest): Promise<InitMultiPaymentResponse> {
    return this._client.post(`/payment/v1/multi-payments/init`, request);
  }

  async retrieveMultiPayment(token: string): Promise<MultiPaymentResponse> {
    return this._client.get(`/payment/v1/multi-payments/${token}`);
  }

  async retrieveProviderCards(request: RetrieveProviderCardRequest): Promise<DataResponse<StoredCardResponse>> {
    return this._client.get('/payment/v1/cards/provider-card-mappings', request);
  }

  async is3DSecureCallbackVerified(threeDSecureCallbackKey: string, params: Map<string, string>): Promise<boolean> {
    const hash = params['hash'];
    const hashString: string = [
      threeDSecureCallbackKey,
      params['status'],
      params['completeStatus'],
      params['paymentId'],
      params['conversationData'],
      params['conversationId'],
      params['callbackStatus']
    ].join('###');

    const hashed = calculateHash(hashString);
    return hash == hashed;
  }
}
