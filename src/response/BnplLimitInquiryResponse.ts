import ApmAdditionalAction from '../model/ApmAdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

type BnplLimitInquiryResponse = {
  paymentStatus: PaymentStatus;
  additionalAction: ApmAdditionalAction;
  additionalData?: Map<string, any>;
  errorCode: string;
  errorMessage: string;
};

export default BnplLimitInquiryResponse;
