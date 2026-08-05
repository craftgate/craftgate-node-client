import {ClientCreationOptions, requestScopedConfig} from '../lib/HttpClient';

import CreateMerchantPosRequest from '../request/CreateMerchantPosRequest';
import DeleteMerchantPosRequest from '../request/DeleteMerchantPosRequest';
import SearchMerchantPosRequest from '../request/SearchMerchantPosRequest';
import UpdateMerchantPosCommissionRequest from '../request/UpdateMerchantPosCommissionRequest';
import UpdateMerchantPosRequest from '../request/UpdateMerchantPosRequest';
import UpdateMerchantPosStatusRequest from '../request/UpdateMerchantPosStatusRequest';

import DataResponse from '../response/DataResponse';
import MerchantPosCommissionResponse from '../response/MerchantPosCommissionResponse';
import MerchantPosResponse from '../response/MerchantPosResponse';

import BaseAdapter from './BaseAdapter';

export default class MerchantAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createMerchantPos(request: CreateMerchantPosRequest): Promise<MerchantPosResponse> {
    return this._client.post('/merchant/v1/merchant-poses', request);
  }

  async retrieveMerchantPos(id: number): Promise<MerchantPosResponse> {
    return this._client.get(`/merchant/v1/merchant-poses/${id}`);
  }

  async deleteMerchantPos(request: DeleteMerchantPosRequest): Promise<void> {
    return this._client.delete(`/merchant/v1/merchant-poses/${request.merchantPosId}`, undefined, requestScopedConfig(request));
  }

  async updateMerchantPosStatus(request: UpdateMerchantPosStatusRequest): Promise<void> {
    return this._client.put(`/merchant/v1/merchant-poses/${request.merchantPosId}/status/${request.posStatus}`, undefined, requestScopedConfig(request));
  }

  async updateMerchantPos(id: number, request: UpdateMerchantPosRequest): Promise<MerchantPosResponse> {
    return this._client.put(`/merchant/v1/merchant-poses/${id}`, request);
  }

  async searchMerchantPos(request: SearchMerchantPosRequest): Promise<DataResponse<MerchantPosResponse>> {
    return this._client.get(`/merchant/v1/merchant-poses`, request);
  }

  async retrieveMerchantPosCommissions(id: number): Promise<DataResponse<MerchantPosCommissionResponse>> {
    return this._client.get(`/merchant/v1/merchant-poses/${id}/commissions`);
  }

  async updateMerchantPosCommissions(id: number, request: UpdateMerchantPosCommissionRequest): Promise<MerchantPosResponse> {
    return this._client.post(`/merchant/v1/merchant-poses/${id}/commissions`, request);
  }
}
