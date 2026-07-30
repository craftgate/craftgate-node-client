import BaseRequest from './BaseRequest';

type CompleteApmPaymentRequest = BaseRequest & {
  paymentId: number;
  additionalParams?: Record<string, unknown>;
};

export default CompleteApmPaymentRequest;
