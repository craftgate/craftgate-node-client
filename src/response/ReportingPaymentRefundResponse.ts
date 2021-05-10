import PaymentType from '../model/PaymentType';

import BasePaymentRefundResponse from './common/BasePaymentRefundResponse';
import PaymentError from './dto/PaymentError';

type ReportingPaymentRefundResponse = BasePaymentRefundResponse & {
  paymentType: PaymentType;
  error: PaymentError;
};

export default ReportingPaymentRefundResponse;
