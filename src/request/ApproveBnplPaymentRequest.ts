import BaseRequest from './BaseRequest';

type ApproveBnplPaymentRequest = BaseRequest & {
  paymentId: number;
};

export default ApproveBnplPaymentRequest;
