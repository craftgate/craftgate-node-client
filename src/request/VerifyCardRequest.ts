import CardVerificationAuthType from '../model/CardVerificationAuthType';
import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';
import VerifyCard from './dto/VerifyCard';

type VerifyCardRequest = BaseRequest & {
  card: VerifyCard;
  paymentAuthenticationType: CardVerificationAuthType;
  verificationPrice: number;
  currency: Currency;
  clientIp?: string;
  conversationId?: string;
  callbackUrl?: string;
};

export default VerifyCardRequest;
