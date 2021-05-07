import CreatePaymentRequest from './CreatePaymentRequest';

type InitThreeDSPaymentRequest = CreatePaymentRequest & {
  callbackUrl: string;
};

export default InitThreeDSPaymentRequest;
