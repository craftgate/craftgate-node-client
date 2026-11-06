import BaseRequest from './BaseRequest';

type SearchPaymentTransactionPayoutsRequest = BaseRequest & {
  paymentTransactionIds: number[];
};

export default SearchPaymentTransactionPayoutsRequest;
