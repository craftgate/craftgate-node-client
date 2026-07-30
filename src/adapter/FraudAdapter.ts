import {ClientCreationOptions, idempotencyKeyConfig} from '../lib/HttpClient';
import FraudValueType from '../model/FraudValueType';

import AddCardFingerprintFraudValueListRequest from '../request/AddFraudValueListRequest';
import DeleteValueListRequest from '../request/DeleteValueListRequest';
import FraudValueListRequest from '../request/FraudValueListRequest';
import RemoveValueFromValueListRequest from '../request/RemoveValueFromValueListRequest';
import SearchFraudChecksRequest from '../request/SearchFraudChecksRequest';
import SearchFraudRuleRequest from '../request/SearchFraudRuleRequest';
import UpdateFraudCheckStatusRequest from '../request/UpdateFraudCheckStatusRequest';

import FraudAllValueListsResponse from '../response/FraudAllValueListsResponse';
import FraudCheckListResponse from '../response/FraudCheckListResponse';
import FraudRuleResponse from '../response/FraudRuleResponse';
import FraudValueListResponse from '../response/FraudValueListResponse';

import BaseAdapter from './BaseAdapter';

export default class FraudAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchFraudChecks(request: SearchFraudChecksRequest): Promise<FraudCheckListResponse> {
    return this._client.get('/fraud/v1/fraud-checks', request);
  }

  async searchFraudRules(request: SearchFraudRuleRequest): Promise<FraudRuleResponse> {
    return this._client.get('/fraud/v1/rules', request);
  }

  async updateFraudCheckStatus(request: UpdateFraudCheckStatusRequest): Promise<void> {
    // The id belongs in the path, so only the status is sent as the body.
    await this._client.put(`/fraud/v1/fraud-checks/${request.id}/check-status`, {checkStatus: request.checkStatus, idempotencyKey: request.idempotencyKey});
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

  async deleteValueList(request: DeleteValueListRequest): Promise<void> {
    await this._client.delete(`/fraud/v1/value-lists/${request.listName}`, undefined, idempotencyKeyConfig(request));
  }

  async addValueToValueList(request: FraudValueListRequest): Promise<void> {
    await this._client.post(`/fraud/v1/value-lists`, request);
  }

  async addCardFingerprint(request: AddCardFingerprintFraudValueListRequest, listName: string): Promise<void> {
    await this._client.post(`/fraud/v1/value-lists/${listName}/card-fingerprints`, request);
  }

  async removeValueFromValueList(request: RemoveValueFromValueListRequest): Promise<void> {
    await this._client.delete(`/fraud/v1/value-lists/${request.listName}/values/${request.valueId}`, undefined, idempotencyKeyConfig(request));
  }
}
