import SettlementType from '../model/SettlementType';

import BaseRequest from './BaseRequest';

type SearchPayoutCompletedItemsRequest = BaseRequest & {
  settlementFileId?: number;
  settlementType?: SettlementType;
  endDate: Date;
  startDate: Date;
  page?: number;
  size?: number;
};

export default SearchPayoutCompletedItemsRequest;
