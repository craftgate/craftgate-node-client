import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';

type CompletePosApmPaymentResponse = {
  conversationId: string;
  paymentId: number;
  status: PaymentStatus;
  paymentError: PaymentError;
};

export default CompletePosApmPaymentResponse;
