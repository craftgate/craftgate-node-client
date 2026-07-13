import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentMethod from '../model/PaymentMethod';

import PaymentItem from './dto/PaymentItem';

type InitMultiPaymentRequest = {
  price: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  conversationId?: string;
  externalId?: string;
  callbackUrl: string;
  paymentChannel?: string;
  enabledPaymentMethods?: PaymentMethod[];
  enabledInstallments: number[];
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
