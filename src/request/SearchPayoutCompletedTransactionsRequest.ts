import SettlementType from '../model/SettlementType';

type SearchPayoutCompletedTransactionsRequest = {
  settlementFileId?: number;
  settlementType?: SettlementType;
  endDate: Date;
  startDate: Date;
  page?: number;
  size?: number;
};

export default SearchPayoutCompletedTransactionsRequest;
