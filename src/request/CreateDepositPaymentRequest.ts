import Currency from '../model/Currency';

import {Card} from './dto/Card';
import RoutingOptions from './dto/RoutingOptions';

type CreateDepositPaymentRequest = {
  buyerMemberId: number;
  price: number;
  currency: Currency;
  conversationId?: string;
  callbackUrl?: string;
  posAlias?: string;
  clientIp?: string;
  card: Card;
  routingOptions?: RoutingOptions;
};

export default CreateDepositPaymentRequest;
