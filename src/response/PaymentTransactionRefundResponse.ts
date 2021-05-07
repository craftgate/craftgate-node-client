import BasePaymentTransactionRefundResponse from './common/BasePaymentTransactionRefundResponse';

type PaymentTransactionRefundResponse = BasePaymentTransactionRefundResponse & {
  paymentId: number;
};

export default PaymentTransactionRefundResponse;
