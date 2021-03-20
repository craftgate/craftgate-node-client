import Currency from '../model/Currency';
import PayoutStatus from '../model/PayoutStatus';

type SearchWithdrawsRequest = {
  memberId?: number;
  currency?: Currency;
  payoutStatus?: PayoutStatus;
  minWithdrawPrice?: number;
  maxWithdrawPrice?: number;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
  page?: number;
  size?: number;
};

export default SearchWithdrawsRequest;
