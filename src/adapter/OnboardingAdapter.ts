import {ClientCreationOptions} from '../lib/HttpClient';

import CreateMemberRequest from '../request/CreateMemberRequest';
import CreateMerchantRequest from '../request/CreateMerchantRequest';
import SearchMembersRequest from '../request/SearchMembersRequest';
import UpdateMemberRequest from '../request/UpdateMemberRequest';

import CreateMerchantResponse from '../response/CreateMerchantResponse';
import DataResponse from '../response/DataResponse';
import MemberResponse from '../response/MemberResponse';

import BaseAdapter from './BaseAdapter';

export default class OnboardingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createMerchant(request: CreateMerchantRequest): Promise<CreateMerchantResponse> {
    return this._client.post('/onboarding/v1/merchants', request);
  }

  async createMember(request: CreateMemberRequest): Promise<MemberResponse> {
    return this._client.post('/onboarding/v1/members', request);
  }

  async updateMember(memberId: number, request: UpdateMemberRequest): Promise<MemberResponse> {
    return this._client.put(`/onboarding/v1/members/${memberId}`, request);
  }

  async retrieveMember(memberId: number): Promise<MemberResponse> {
    return this._client.get(`/onboarding/v1/members/${memberId}`);
  }

  async searchMembers(request: SearchMembersRequest): Promise<DataResponse<MemberResponse>> {
    return this._client.get(`/onboarding/v1/members`, request);
  }
}
