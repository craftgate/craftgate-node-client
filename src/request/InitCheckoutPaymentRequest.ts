import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentMethod from '../model/PaymentMethod';
import PaymentPhase from '../model/PaymentPhase';

import CustomInstallment from './dto/CustomInstallment';
import PaymentItem from './dto/PaymentItem';

type InitCheckoutPaymentRequest = {
  price: number;
  paidPrice: number;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  paymentPhase?: PaymentPhase;
  paymentChannel?: string;
  enabledPaymentMethods?: PaymentMethod[];
  masterpassGsmNumber?: string;
  masterpassUserId?: string;
  conversationId?: string;
  externalId?: string;
  bankOrderId?: string;
  cardUserKey?: string;
  callbackUrl: string;
  clientIp?: string;
  enabledInstallments?: number[];
  alwaysStoreCardAfterPayment?: boolean;
  allowOnlyStoredCards?: boolean;
  allowOnlyCreditCard?: boolean;
  allowInstallmentOnlyCommercialCards?: boolean;
  forceThreeDS?: boolean;
  forceAuthForNonCreditCards?: boolean;
  ttl?: number;
  customInstallments?: CustomInstallment[];
  items: PaymentItem[];
};

export default InitCheckoutPaymentRequest;
