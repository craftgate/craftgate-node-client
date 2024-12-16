import {ClientCreationOptions} from '../lib/HttpClient';

import CreateInstantWalletSettlementRequest from '../request/CreateInstantWalletSettlementRequest';
import CreatePayoutAccountRequest from '../request/CreatePayoutAccountRequest';
import SearchPayoutAccountRequest from '../request/SearchPayoutAccountRequest';
import UpdatePayoutAccountRequest from '../request/UpdatePayoutAccountRequest';

import DataResponse from '../response/DataResponse';
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

  async deletePayoutAccount(id: number): Promise<void> {
    await this._client.delete(`/settlement/v1/payout-accounts/${id}`);
  }

  async searchPayoutAccount(request: SearchPayoutAccountRequest): Promise<DataResponse<PayoutAccountResponse>> {
    return this._client.get(`/settlement/v1/payout-accounts`, request);
  }
}
