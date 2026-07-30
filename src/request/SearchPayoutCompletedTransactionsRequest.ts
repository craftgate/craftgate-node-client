import SettlementType from '../model/SettlementType';

import BaseRequest from './BaseRequest';

type SearchPayoutCompletedTransactionsRequest = BaseRequest & {
  settlementFileId?: number;
  settlementType?: SettlementType;
  endDate: Date;
  startDate: Date;
  page?: number;
  size?: number;
};

export default SearchPayoutCompletedTransactionsRequest;
