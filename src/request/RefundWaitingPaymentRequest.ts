import BaseRequest from './BaseRequest';

type RefundWaitingPaymentRequest = BaseRequest & {
  paymentId: number;
};

export default RefundWaitingPaymentRequest;
