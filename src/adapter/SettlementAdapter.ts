import {ClientCreationOptions, requestScopedConfig} from '../lib/HttpClient';

import ApprovePaymentTransactionsRequest from '../request/ApprovePaymentTransactionsRequest';
import CreateInstantWalletSettlementRequest from '../request/CreateInstantWalletSettlementRequest';
import CreatePayoutAccountRequest from '../request/CreatePayoutAccountRequest';
import DeletePayoutAccountRequest from '../request/DeletePayoutAccountRequest';
import DisapprovePaymentTransactionsRequest from '../request/DisapprovePaymentTransactionsRequest';
import SearchPayoutAccountRequest from '../request/SearchPayoutAccountRequest';
import UpdatePaymentTransactionRequest from '../request/UpdatePaymentTransactionRequest';
import UpdatePayoutAccountRequest from '../request/UpdatePayoutAccountRequest';

import DataResponse from '../response/DataResponse';
import PaymentTransactionApprovalListResponse from '../response/PaymentTransactionApprovalListResponse';
import PaymentTxPayoutResponse from '../response/PaymentTxPayoutResponse';
import PayoutAccountResponse from '../response/PayoutAccountResponse';
import SettlementResponse from '../response/SettlementResponse';

import BaseAdapter from './BaseAdapter';

export default class SettlementAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createInstantWalletSettlement(request: CreateInstantWalletSettlementRequest): Promise<SettlementResponse> {
    return this._client.post('/settlement/v1/instant-wallet-settlements', request);
  }

  async createPayoutAccount(request: CreatePayoutAccountRequest): Promise<PayoutAccountResponse> {
    return this._client.post('/settlement/v1/payout-accounts', request);
  }

  async updatePayoutAccount(id: number, request: UpdatePayoutAccountRequest): Promise<void> {
    await this._client.put(`/settlement/v1/payout-accounts/${id}`, request);
  }

  async deletePayoutAccount(request: DeletePayoutAccountRequest): Promise<void> {
    await this._client.delete(`/settlement/v1/payout-accounts/${request.id}`, undefined, requestScopedConfig(request));
  }

  async searchPayoutAccount(request: SearchPayoutAccountRequest): Promise<DataResponse<PayoutAccountResponse>> {
    return this._client.get(`/settlement/v1/payout-accounts`, request);
  }

  async approvePaymentTransactions(request: ApprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/settlement/v1/payment-transactions/approve', request);
  }

  async disapprovePaymentTransactions(request: DisapprovePaymentTransactionsRequest): Promise<PaymentTransactionApprovalListResponse> {
    return this._client.post('/settlement/v1/payment-transactions/disapprove', request);
  }

  async updatePaymentTransaction(paymentTransactionId: number, request: UpdatePaymentTransactionRequest): Promise<PaymentTxPayoutResponse> {
    return this._client.put(`/settlement/v1/payment-transactions/${paymentTransactionId}`, request);
  }
}
