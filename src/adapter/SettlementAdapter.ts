import {ClientCreationOptions} from '../lib/HttpClient';

import CreateInstantWalletSettlementRequest from '../request/CreateInstantWalletSettlementRequest';

import SettlementResponse from '../response/SettlementResponse';

import BaseAdapter from './BaseAdapter';

export default class SettlementAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createInstantWalletSettlement(request: CreateInstantWalletSettlementRequest): Promise<SettlementResponse> {
    return this._client.get('/settlement/v1/instant-wallet-settlements', request);
  }
}
