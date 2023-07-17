import AccountOwner from '../model/AccountOwner';
import Currency from '../model/Currency';
import PayoutAccountType from '../model/PayoutAccountType';

type PayoutAccountResponse = {
  id: number;
  type: PayoutAccountType;
  externalAccountId: string;
  currency: Currency;
  accountOwner: AccountOwner;
  subMerchantMemberId?: string;
};

export default PayoutAccountResponse;
