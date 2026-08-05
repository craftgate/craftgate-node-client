import BaseRequest from './BaseRequest';

type VerifyBnplPaymentRequest = BaseRequest & {
  paymentId: number;
};

export default VerifyBnplPaymentRequest;
