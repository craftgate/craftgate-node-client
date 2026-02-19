import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentMethod from '../model/PaymentMethod';
import PaymentPhase from '../model/PaymentPhase';
import PaymentSource from '../model/PaymentSource';

import PaymentItem from './dto/PaymentItem';

type InitMultiPaymentRequest = {
  price: number;
  paidPrice: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  paymentSource?: PaymentSource;
  conversationId?: string;
  externalId?: string;
  callbackUrl: string;
  paymentPhase?: PaymentPhase;
  paymentChannel?: string;
  enabledPaymentMethods?: PaymentMethod[];
  cardUserKey?: string;
  buyerMemberId?: number;
  allowOnlyCreditCard?: boolean;
  forceAuthForNonCreditCards?: boolean;
  allowOnlyStoredCards?: boolean;
  allowInstallmentOnlyCommercialCards?: boolean;
  alwaysStoreCardAfterPayment?: boolean;
  disableStoreCard?: boolean;
  forceThreeDS?: boolean;
  masterpassGsmNumber?: string;
  masterpassUserId?: string;
  apmUserIdentity?: string;
  items?: PaymentItem[];
  ttl?: number;
  maximumSplitPaymentCount?: number;
  additionalParams?: Record<string, unknown>;
};

export default InitMultiPaymentRequest;
