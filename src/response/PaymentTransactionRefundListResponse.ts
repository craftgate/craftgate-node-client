import PaymentTransactionRefundResponse from './PaymentTransactionRefundResponse'

type PaymentTransactionRefundListResponse = {
  size: number;
  items: PaymentTransactionRefundResponse[];
};

export default PaymentTransactionRefundListResponse;
