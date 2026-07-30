import BaseRequest from './BaseRequest';

type RefundPaymentTransactionMarkAsRefundedRequest = BaseRequest & {
  paymentTransactionId: number;
  conversationId?: string;
  refundPrice: number;
};

export default RefundPaymentTransactionMarkAsRefundedRequest;
