import {ClientCreationOptions} from '../lib/HttpClient';
import PosStatus from '../model/PosStatus';

import CreateMerchantPosRequest from '../request/CreateMerchantPosRequest';
import SearchMerchantPosRequest from '../request/SearchMerchantPosRequest';
import UpdateMerchantPosCommissionRequest from '../request/UpdateMerchantPosCommissionRequest';
import UpdateMerchantPosRequest from '../request/UpdateMerchantPosRequest';

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

  async deleteMerchantPos(id: number): Promise<void> {
    return this._client.delete(`/merchant/v1/merchant-poses/${id}`);
  }

  async updateMerchantPosStatus(id: number, status: PosStatus): Promise<void> {
    return this._client.put(`/merchant/v1/merchant-poses/${id}/status/${status}`);
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
