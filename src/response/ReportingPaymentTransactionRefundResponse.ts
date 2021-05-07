import PaymentType from '../model/PaymentType';

import BasePaymentTransactionRefundResponse from './common/BasePaymentTransactionRefundResponse';
import PaymentError from './dto/PaymentError';

type ReportingPaymentTransactionRefundResponse = BasePaymentTransactionRefundResponse & {
  paymentType: PaymentType;
  error: PaymentError;
};

export default ReportingPaymentTransactionRefundResponse;
