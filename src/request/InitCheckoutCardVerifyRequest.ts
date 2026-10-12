import CardVerificationAuthType from '../model/CardVerificationAuthType';
import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type InitCheckoutCardVerifyRequest = BaseRequest & {
  verificationPrice: number;
  currency: Currency;
  conversationId?: string;
  callbackUrl: string;
  cardUserKey?: string;
  paymentAuthenticationType: CardVerificationAuthType;
  ttl?: number;
};

export default InitCheckoutCardVerifyRequest;
