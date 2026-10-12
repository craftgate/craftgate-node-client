import BaseRequest from './BaseRequest';

type DisapprovePaymentTransactionsRequest = BaseRequest & {
  paymentTransactionIds: number[];
  isTransactional?: boolean;
};

export default DisapprovePaymentTransactionsRequest;
