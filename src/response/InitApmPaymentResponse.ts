import ApmAdditionalAction from '../model/ApmAdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';

type InitApmPaymentResponse = {
  paymentId: number;
  redirectUrl: string;
  htmlContent: string;
  paymentStatus: PaymentStatus;
  additionalAction: ApmAdditionalAction;
  paymentError: PaymentError;
  additionalData?: Map<string, any>;
};

export default InitApmPaymentResponse;
