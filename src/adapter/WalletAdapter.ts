import {ClientCreationOptions} from '../lib/HttpClient';

import CreateMemberWalletRequest from '../request/CreateMemberWalletRequest';
import CreateRemittanceRequest from '../request/CreateRemittanceRequest';
import CreateWithdrawRequest from '../request/CreateWithdrawRequest';
import RefundWalletTransactionRequest from '../request/RefundWalletTransactionRequest';
import ResetMerchantMemberWalletBalanceRequest from '../request/ResetMerchantMemberWalletBalanceRequest';
import SearchWalletTransactionsRequest from '../request/SearchWalletTransactionsRequest';
import SearchWithdrawsRequest from '../request/SearchWithdrawsRequest';
import UpdateMemberWalletRequest from '../request/UpdateMemberWalletRequest';

import DataResponse from '../response/DataResponse';
import RefundWalletTransactionListResponse from '../response/RefundWalletTransactionListResponse';
import RefundWalletTransactionResponse from '../response/RefundWalletTransactionResponse';
import RemittanceResponse from '../response/RemittanceResponse';
import WalletResponse from '../response/WalletResponse';
import WalletTransactionRefundableAmountResponse from '../response/WalletTransactionRefundableAmountResponse';
import WalletTransactionResponse from '../response/WalletTransactionResponse';
import WithdrawResponse from '../response/WithdrawResponse';

import BaseAdapter from './BaseAdapter';

export default class WalletAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createMemberWallet(memberId: number, request: CreateMemberWalletRequest): Promise<WalletResponse> {
    return this._client.post(`/wallet/v1/members/${memberId}/wallets`, request);
  }

  async retrieveMemberWallet(memberId: number): Promise<WalletResponse> {
    return this._client.get(`/wallet/v1/members/${memberId}/wallet`);
  }

  async searchWalletTransactions(walletId: number, request: SearchWalletTransactionsRequest): Promise<DataResponse<WalletTransactionResponse>> {
    return this._client.get(`/wallet/v1/wallets/${walletId}/wallet-transactions`, request);
  }

  async updateMemberWallet(memberId: number, walletId: number, request: UpdateMemberWalletRequest): Promise<WalletResponse> {
    return this._client.put(`/wallet/v1/members/${memberId}/wallets/${walletId}`, request);
  }

  async sendRemittance(request: CreateRemittanceRequest): Promise<RemittanceResponse> {
    return this._client.post('/wallet/v1/remittances/send', request);
  }

  async receiveRemittance(request: CreateRemittanceRequest): Promise<RemittanceResponse> {
    return this._client.post('/wallet/v1/remittances/receive', request);
  }

  async retrieveRemittance(remittanceId: number): Promise<RemittanceResponse> {
    return this._client.get(`/wallet/v1/remittances/${remittanceId}`);
  }

  async retrieveMerchantMemberWallet(): Promise<WalletResponse> {
    return this._client.get('/wallet/v1/merchants/me/wallet');
  }

  async resetMerchantMemberWalletBalance(request: ResetMerchantMemberWalletBalanceRequest): Promise<WalletResponse> {
    return this._client.post('/wallet/v1/merchants/me/wallet/reset-balance', request);
  }

  async retrieveRefundableAmountOfWalletTransaction(walletTransactionId: number): Promise<WalletTransactionRefundableAmountResponse> {
    return this._client.get(`/payment/v1/wallet-transactions/${walletTransactionId}/refundable-amount`);
  }

  async refundWalletTransaction(walletTransactionId: number, request: RefundWalletTransactionRequest): Promise<RefundWalletTransactionResponse> {
    return this._client.post(`/payment/v1/wallet-transactions/${walletTransactionId}/refunds`, request);
  }

  async retrieveRefundWalletTransactions(walletTransactionId: number): Promise<RefundWalletTransactionListResponse> {
    return this._client.get(`/payment/v1/wallet-transactions/${walletTransactionId}/refunds`);
  }

  async createWithdraw(request: CreateWithdrawRequest): Promise<WithdrawResponse> {
    return this._client.post('/wallet/v1/withdraws', request);
  }

  async cancelWithdraw(withdrawId: number): Promise<WithdrawResponse> {
    return this._client.post(`/wallet/v1/withdraws/${withdrawId}/cancel`);
  }

  async retrieveWithdraw(withdrawId: number): Promise<WithdrawResponse> {
    return this._client.get(`/wallet/v1/withdraws/${withdrawId}`);
  }

  async searchWithdraws(request: SearchWithdrawsRequest): Promise<DataResponse<WithdrawResponse>> {
    return this._client.get('/wallet/v1/withdraws', request);
  }
}
