import Currency from '../model/Currency';
import TransactionPayoutStatus from '../model/TransactionPayoutStatus';

import BaseRequest from './BaseRequest';

type SearchWithdrawsRequest = BaseRequest & {
  memberId?: number;
  currency?: Currency;
  payoutStatus?: TransactionPayoutStatus;
  minWithdrawPrice?: number;
  maxWithdrawPrice?: number;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
  page?: number;
  size?: number;
};

export default SearchWithdrawsRequest;
