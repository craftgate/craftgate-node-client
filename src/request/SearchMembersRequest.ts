import MemberType from '../model/MemberType';

import BaseRequest from './BaseRequest';

type SearchMembersRequest = BaseRequest & {
  isBuyer?: boolean;
  isSubMerchant?: boolean;
  name?: string;
  memberIds?: number[];
  memberExternalId?: string;
  memberType?: MemberType;
  page?: number;
  size?: number;
};

export default SearchMembersRequest;
