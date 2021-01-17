import Currency from '../model/Currency';

import {Card} from './dto/Card';

type CreateDepositPaymentRequest = {
  price: number;
  buyerMemberId: number;
  currency: Currency;
  conversationId?: string;
  callbackUrl?: string;
  posAlias?: string;
  card?: Card;
};

export default CreateDepositPaymentRequest;
