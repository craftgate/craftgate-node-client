import CardVerificationAuthType from '../model/CardVerificationAuthType';
import Currency from '../model/Currency';

import VerifyCard from './dto/VerifyCard';

type VerifyCardRequest = {
  card: VerifyCard;
  paymentAuthenticationType: CardVerificationAuthType;
  verificationPrice: number;
  currency: Currency;
  clientIp?: string;
  conversationId?: string;
  callbackUrl?: string;
};

export default VerifyCardRequest;
