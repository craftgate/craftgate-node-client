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

  async updateMerchantPos(merchantPosId: number, request: UpdateMerchantPosRequest): Promise<MerchantPosResponse> {
    return this._client.put(`/merchant/v1/merchant-poses/${merchantPosId}`, request);
  }

  async updateMerchantPosStatus(merchantPosId: number, posStatus: PosStatus): Promise<void> {
    return this._client.put(`/merchant/v1/merchant-poses/${merchantPosId}/status/${posStatus}`);
  }

  async searchMerchantPos(request: SearchMerchantPosRequest): Promise<DataResponse<MerchantPosResponse>> {
    return this._client.get('/merchant/v1/merchant-poses', request);
  }

  async retrieveMerchantPos(merchantPosId: number): Promise<MerchantPosResponse> {
    return this._client.get(`/merchant/v1/merchant-poses/${merchantPosId}`);
  }

  async deleteMerchantPos(merchantPosId: number): Promise<void> {
    return this._client.delete(`/merchant/v1/merchant-poses/${merchantPosId}`);
  }

  async retrieveMerchantPosCommissions(merchantPosId: number): Promise<DataResponse<MerchantPosCommissionResponse>> {
    return this._client.get(`/merchant/v1/merchant-poses/${merchantPosId}/commissions`);
  }

  /*
   * This endpoint using for creating and updating merchant pos commissions. The HTTP method is POST due to this requirement.
   * */
  async updateMerchantPosCommissions(merchantPosId: number, request: UpdateMerchantPosCommissionRequest): Promise<DataResponse<MerchantPosCommissionResponse>> {
    return this._client.post(`/merchant/v1/merchant-poses/${merchantPosId}/commissions`, request);
  }
}
