type RefundPaymentTransactionMarkAsRefundedRequest = {
  paymentTransactionId: number;
  conversationId?: string;
  refundPrice: number;
};

export default RefundPaymentTransactionMarkAsRefundedRequest;
