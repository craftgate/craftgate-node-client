import {Card} from './dto/Card';

type CreateDepositPaymentRequest = {
  price: number;
  buyerMemberId: number;
  currency: string;
  conversationId?: string;
  callbackUrl?: string;
  posAlias?: string;
  card: Card;
};

export default CreateDepositPaymentRequest;
