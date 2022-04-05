import {Card} from './dto/Card';

type CreateDepositPaymentRequest = {
  price: number;
  buyerMemberId: number;
  conversationId?: string;
  callbackUrl?: string;
  posAlias?: string;
  clientIp?: string;
  card: Card;
};

export default CreateDepositPaymentRequest;
