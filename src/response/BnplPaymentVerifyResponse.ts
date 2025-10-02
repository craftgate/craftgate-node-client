import ApmAdditionalAction from '../model/ApmAdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';

type BnplPaymentVerifyResponse = {
  paymentStatus: PaymentStatus;
  apmAdditionalAction: ApmAdditionalAction;
  paymentError: PaymentError;
};

export default BnplPaymentVerifyResponse;
