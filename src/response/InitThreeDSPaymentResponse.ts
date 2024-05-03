import AdditionalAction from '../model/AdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

type InitThreeDSPaymentResponse = {
  htmlContent: string;
  paymentId: number;
  paymentStatus: PaymentStatus;
  additionalAction: AdditionalAction;
};

export default InitThreeDSPaymentResponse;
