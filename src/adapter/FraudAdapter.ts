import {ClientCreationOptions} from '../lib/HttpClient';
import FraudCheckStatus from '../model/FraudCheckStatus';
import FraudValueType from '../model/FraudValueType';

import AddCardFingerprintFraudValueListRequest from '../request/AddFraudValueListRequest';
import FraudValueListRequest from '../request/FraudValueListRequest';
import SearchFraudChecksRequest from '../request/SearchFraudChecksRequest';

import FraudAllValueListsResponse from '../response/FraudAllValueListsResponse';
import FraudCheckListResponse from '../response/FraudCheckListResponse';
import FraudValueListResponse from '../response/FraudValueListResponse';

import BaseAdapter from './BaseAdapter';

export default class FraudAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchFraudChecks(request: SearchFraudChecksRequest): Promise<FraudCheckListResponse> {
    return this._client.get('/fraud/v1/fraud-checks', request);
  }

  async updateFraudCheckStatus(id: number, fraudCheckStatus: FraudCheckStatus): Promise<void> {
    await this._client.put(`/fraud/v1/fraud-checks/${id}/check-status`, {checkStatus: fraudCheckStatus});
  }

  async retrieveAllValueLists(): Promise<FraudAllValueListsResponse> {
    return this._client.get('/fraud/v1/value-lists/all');
  }

  async retrieveValueList(listName: string): Promise<FraudValueListResponse> {
    return this._client.get(`/fraud/v1/value-lists/${listName}`);
  }

  async createValueList(listName: string, type: FraudValueType): Promise<void> {
    await this.addValueToValueList({
      listName: listName,
      type: type
    });
  }

  async deleteValueList(listName: string): Promise<void> {
    await this._client.delete(`/fraud/v1/value-lists/${listName}`);
  }

  async addValueToValueList(request: FraudValueListRequest): Promise<void> {
    await this._client.post(`/fraud/v1/value-lists`, request);
  }

  async addCardFingerprint(request: AddCardFingerprintFraudValueListRequest, listName: string): Promise<void> {
    await this._client.post(`/fraud/v1/value-lists/${listName}/card-fingerprints`, request);
  }

  async removeValueFromValueList(listName: string, valueId: string): Promise<void> {
    await this._client.delete(`/fraud/v1/value-lists/${listName}/values/${valueId}`);
  }
}
