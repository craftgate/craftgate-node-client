import CardVerificationAuthType from '../model/CardVerificationAuthType';
import Currency from '../model/Currency';

type InitCheckoutCardVerifyRequest = {
  verificationPrice: number;
  currency: Currency;
  conversationId?: string;
  callbackUrl: string;
  cardUserKey?: string;
  paymentAuthenticationType: CardVerificationAuthType;
  ttl?: number;
};

export default InitCheckoutCardVerifyRequest;
