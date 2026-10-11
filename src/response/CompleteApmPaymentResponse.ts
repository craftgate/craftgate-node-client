import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';

type CompleteApmPaymentResponse = {
  paymentId: number;
  paymentStatus: PaymentStatus;
  paymentError: PaymentError;
};

export default CompleteApmPaymentResponse;
