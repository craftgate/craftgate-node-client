import {ClientCreationOptions} from '../lib/HttpClient';
import FraudCheckStatus from '../model/FraudCheckStatus';

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

  async createValueList(listName: string): Promise<void> {
    await this.addValueToValueList(listName, null, null);
  }

  async deleteValueList(listName: string): Promise<void> {
    await this._client.delete(`/fraud/v1/value-lists/${listName}`);
  }

  async addValueToValueList(listName: string, value: string, expireInSeconds: number): Promise<void> {
    await this._client.post(`/fraud/v1/value-lists`, {
      listName: listName,
      value: value,
      durationInSeconds: expireInSeconds
    });
  }

  async removeValueFromValueList(listName: string, value: string): Promise<void> {
    await this._client.delete(`/fraud/v1/value-lists/${listName}/values/${value}`);
  }
}
