import BaseRequest from './BaseRequest';

type CompletePosApmPaymentRequest = BaseRequest & {
  paymentId: number;
  additionalParams?: Record<string, unknown>;
};

export default CompletePosApmPaymentRequest;
