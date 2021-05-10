import Currency from '../model/Currency';

import BasePaymentTransactionRefundResponse from './common/BasePaymentTransactionRefundResponse';

type PaymentTransactionRefundResponse = BasePaymentTransactionRefundResponse & {
  currency: Currency;
  paymentId: number;
};

export default PaymentTransactionRefundResponse;
