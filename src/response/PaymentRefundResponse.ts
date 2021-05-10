import Currency from '../model/Currency';
import RefundType from '../model/RefundType';

import BasePaymentRefundResponse from './common/BasePaymentRefundResponse';
import PaymentTransactionRefundResponse from './PaymentTransactionRefundResponse';

type PaymentRefundResponse = BasePaymentRefundResponse & {
  refundType: RefundType;
  currency: Currency;
  paymentTransactionRefunds: PaymentTransactionRefundResponse[];
};

export default PaymentRefundResponse;
