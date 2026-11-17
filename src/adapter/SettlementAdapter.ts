import {ClientCreationOptions} from '../lib/HttpClient';

import ApprovePaymentTransactionsRequest from '../request/ApprovePaymentTransactionsRequest';
import CreateInstantWalletSettlementRequest from '../request/CreateInstantWalletSettlementRequest';
import DisapprovePaymentTransactionsRequest from '../request/DisapprovePaymentTransactionsRequest';
import UpdatePaymentTransactionRequest from '../request/UpdatePaymentTransactionRequest';

import PaymentTransactionApprovalListResponse from '../response/PaymentTransactionApprovalListResponse';
import PaymentTxPayoutResponse from '../response/PaymentTxPayoutResponse';
import SettlementResponse from '../response/SettlementResponse';

import BaseAdapter from './BaseAdapter';

export default class SettlementAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createInstantWalletSettlement(request: CreateInstantWalletSettlementRequest): Promise<SettlementResponse> {
    return this._client.post('/settlement/v1/instant-wallet-settlements', request);
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
