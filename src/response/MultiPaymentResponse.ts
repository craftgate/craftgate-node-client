import MultiPaymentStatus from '../model/MultiPaymentStatus';

type MultiPaymentResponse = {
  id: number;
  multiPaymentStatus: MultiPaymentStatus;
  token: string;
  conversationId: string;
  externalId: string;
  price: number;
  remainingAmount: number;
  tokenExpireDate: Date;
  paymentIds: number[];
};

export default MultiPaymentResponse;
