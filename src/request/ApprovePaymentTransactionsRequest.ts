import BaseRequest from './BaseRequest';

type ApprovePaymentTransactionsRequest = BaseRequest & {
  paymentTransactionIds: number[];
  isTransactional?: boolean;
};

export default ApprovePaymentTransactionsRequest;
