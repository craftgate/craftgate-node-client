import BaseRequest from './BaseRequest';

type CreateFundTransferDepositPaymentRequest = BaseRequest & {
  price: number;
  buyerMemberId: number;
  conversationId?: string;
  clientIp?: string;
  clientPort?: number;
};

export default CreateFundTransferDepositPaymentRequest;
