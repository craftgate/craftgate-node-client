import BasePaymentRefundResponse from './common/BasePaymentRefundResponse';
import PaymentTransactionRefundResponse from './PaymentTransactionRefundResponse';

type PaymentRefundResponse = BasePaymentRefundResponse & {
  paymentTransactionRefunds: PaymentTransactionRefundResponse[];
};

export default PaymentRefundResponse;
