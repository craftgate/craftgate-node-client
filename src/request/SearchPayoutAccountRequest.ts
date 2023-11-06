import AccountOwner from '../model/AccountOwner';
import Currency from '../model/Currency';

type SearchPayoutAccountRequest = {
  page?: number;
  size?: number;
  currency?: Currency;
  accountOwner?: AccountOwner;
  subMerchantMemberId?: number;
};

export default SearchPayoutAccountRequest;
