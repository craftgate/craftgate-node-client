import ApmAdditionalAction from '../model/ApmAdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

type InitApmPaymentResponse = {
  paymentId: number;
  redirectUrl: string;
  paymentStatus: PaymentStatus;
  additionalAction: ApmAdditionalAction;
};

export default InitApmPaymentResponse;
