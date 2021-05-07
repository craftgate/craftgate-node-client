import PaymentType from '../model/PaymentType';

import BasePaymentRefundResponse from './base/BasePaymentRefundResponse';
import PaymentError from './dto/PaymentError';

type ReportingPaymentRefundResponse = BasePaymentRefundResponse & {
  paymentType: PaymentType;
  error: PaymentError;
};

export default ReportingPaymentRefundResponse;
