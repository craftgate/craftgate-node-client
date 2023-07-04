import AdditionalAction from '../model/AdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';

type CompletePosApmPaymentResponse = {
  htmlContent: string;
  paymentId: number;
  paymentStatus: PaymentStatus;
  additionalAction: AdditionalAction;
  paymentError: PaymentError;
};

export default CompletePosApmPaymentResponse;
