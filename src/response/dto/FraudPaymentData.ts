type FraudPaymentData = {
  paymentDate: Date;
  conversationId: string;
  paidPrice: number;
  currency: string;
  cardFingerprintId: string;
  cardFingerprintExpirationDate: Date;
  buyerId: number;
  clientIp: string;
};

export default FraudPaymentData;
