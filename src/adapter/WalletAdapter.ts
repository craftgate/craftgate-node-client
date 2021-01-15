import {ClientCreationOptions} from '../lib/HttpClient';

import SearchWalletsRequest from "../request/SearchWalletsRequest";
import SearchWalletTransactionsRequest from "../request/SearchWalletTransactionsRequest";
import CreateRemittanceRequest from "../request/CreateRemittanceRequest";

import DataResponse from "../response/DataResponse";
import WalletResponse from "../response/WalletResponse";
import RemittanceResponse from "../response/RemittanceResponse";
import WalletTransactionResponse from "../response/WalletTransactionResponse";

import BaseAdapter from './BaseAdapter';

export default class WalletAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchWallets(request: SearchWalletsRequest): Promise<DataResponse<WalletResponse>> {
    return this._client.get('/wallet/v1/wallets', request);
  }

  async searchWalletTransactions(walletId: number, request: SearchWalletTransactionsRequest): Promise<DataResponse<WalletTransactionResponse>> {
    return this._client.get(`/wallet/v1/wallets/${walletId}/wallet-transactions`, request);
  }

  async sendRemittance(request: CreateRemittanceRequest): Promise<RemittanceResponse> {
    return this._client.post('/wallet/v1/remittances/send', request);
  }

  async receiveRemittance(request: CreateRemittanceRequest): Promise<RemittanceResponse> {
    return this._client.post('/wallet/v1/remittances/receive', request);
  }
}
