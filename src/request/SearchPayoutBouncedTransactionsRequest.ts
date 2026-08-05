import BaseRequest from './BaseRequest';

type SearchPayoutBouncedTransactionsRequest = BaseRequest & {
  endDate: Date;
  startDate: Date;
};

export default SearchPayoutBouncedTransactionsRequest;
