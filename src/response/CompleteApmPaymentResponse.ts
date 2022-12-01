import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';

type CompleteApmPaymentResponse = {
  paymentId: number;
  status: PaymentStatus;
  paymentError: PaymentError;
};

export default CompleteApmPaymentResponse;
