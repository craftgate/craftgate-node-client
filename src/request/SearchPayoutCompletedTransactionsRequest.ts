import SettlementType from '../model/SettlementType';

type SearchPayoutCompletedTransactionsRequest = {
  settlementFileId?: number;
  settlementType?: SettlementType;
  endDate: Date;
  startDate: Date;
};

export default SearchPayoutCompletedTransactionsRequest;
