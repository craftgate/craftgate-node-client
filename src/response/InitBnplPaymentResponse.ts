import ApmAdditionalAction from '../model/ApmAdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';

type InitBnplPaymentResponse = {
  paymentId: number;
  redirectUrl: string;
  paymentStatus: PaymentStatus;
  apmAdditionalAction: ApmAdditionalAction;
  paymentError: PaymentError;
  additionalData?: Map<string, any>;
};

export default InitBnplPaymentResponse;
