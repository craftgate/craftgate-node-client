type FraudPaymentData = {
  paymentDate: Date;
  conversationId: string;
  paidPrice: number;
  currency: string;
  buyerId: number;
  clientIp: string;
};

export default FraudPaymentData;
