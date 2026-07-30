import AccountOwner from '../model/AccountOwner';
import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type SearchPayoutAccountRequest = BaseRequest & {
  page?: number;
  size?: number;
  currency?: Currency;
  accountOwner?: AccountOwner;
  subMerchantMemberId?: number;
};

export default SearchPayoutAccountRequest;
