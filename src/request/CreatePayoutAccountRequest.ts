import AccountOwner from '../model/AccountOwner';
import Currency from '../model/Currency';
import PayoutAccountType from '../model/PayoutAccountType';

type CreatePayoutAccountRequest = {
  type: PayoutAccountType;
  externalAccountId: string;
  currency: Currency;
  accountOwner: AccountOwner;
  subMerchantMemberId?: number;
};

export default CreatePayoutAccountRequest;
