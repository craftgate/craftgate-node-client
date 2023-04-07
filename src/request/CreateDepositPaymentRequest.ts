import Currency from '../model/Currency';

import {Card} from './dto/Card';

type CreateDepositPaymentRequest = {
  buyerMemberId: number;
  price: number;
  currency: Currency;
  conversationId?: string;
  callbackUrl?: string;
  posAlias?: string;
  clientIp?: string;
  card: Card;
};

export default CreateDepositPaymentRequest;
