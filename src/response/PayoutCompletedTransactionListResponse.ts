import PayoutCompletedTransaction from './dto/PayoutCompletedTransaction';

type PayoutCompletedTransactionListResponse = {
  items: PayoutCompletedTransaction[];
  page: number;
  size: number;
  totalSize: number;
};

export default PayoutCompletedTransactionListResponse;
