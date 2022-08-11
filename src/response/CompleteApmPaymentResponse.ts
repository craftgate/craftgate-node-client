import PaymentStatus from '../model/PaymentStatus';

type CompleteApmPaymentResponse = {
  paymentId: number;
  status: PaymentStatus;
};

export default CompleteApmPaymentResponse;
