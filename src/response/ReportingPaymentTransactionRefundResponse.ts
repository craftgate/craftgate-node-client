import PaymentType from '../model/PaymentType';

import BasePaymentTransactionRefundResponse from './base/BasePaymentTransactionRefundResponse';
import PaymentError from './dto/PaymentError';

type ReportingPaymentTransactionRefundResponse = BasePaymentTransactionRefundResponse & {
  paymentType: PaymentType;
  error: PaymentError;
};

export default ReportingPaymentTransactionRefundResponse;
