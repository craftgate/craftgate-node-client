import MemberType from '../model/MemberType';

type SearchMembersRequest = {
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
