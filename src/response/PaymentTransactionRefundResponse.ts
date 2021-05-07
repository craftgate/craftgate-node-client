import BasePaymentTransactionRefundResponse from './base/BasePaymentTransactionRefundResponse';

type PaymentTransactionRefundResponse = BasePaymentTransactionRefundResponse & {
  currency: string;
  paymentTransactionId: number;
  paymentId: number;
};

export default PaymentTransactionRefundResponse;
