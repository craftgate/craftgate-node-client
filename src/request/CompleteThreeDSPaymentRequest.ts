import BaseRequest from './BaseRequest';

type CompleteThreeDSPaymentRequest = BaseRequest & {
  paymentId: number;
};

export default CompleteThreeDSPaymentRequest;
