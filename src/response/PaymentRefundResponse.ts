import Currency from '../model/Currency';
import RefundType from '../model/RefundType';

import BasePaymentRefundResponse from './base/BasePaymentRefundResponse';
import PaymentTransactionRefundResponse from './PaymentTransactionRefundResponse';

type PaymentRefundResponse = BasePaymentRefundResponse & {
  refundType: RefundType;
  currency: Currency;
  paymentId: number;
  paymentTransactionRefunds: PaymentTransactionRefundResponse[];
};

export default PaymentRefundResponse;
