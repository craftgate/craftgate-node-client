import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentMethod from '../model/PaymentMethod';
import PaymentPhase from '../model/PaymentPhase';

import CustomInstallment from './dto/CustomInstallment';
import FraudCheckParameters from './dto/FraudCheckParameters';
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
  orderId?: string;
  cardUserKey?: string;
  callbackUrl: string;
  clientIp?: string;
  enabledInstallments?: number[];
  alwaysStoreCardAfterPayment?: boolean;
  allowOnlyStoredCards?: boolean;
  allowOnlyCreditCard?: boolean;
  depositPayments?: boolean;
  allowInstallmentOnlyCommercialCards?: boolean;
  forceThreeDS?: boolean;
  forceAuthForNonCreditCards?: boolean;
  returnBackUrl?: string;
  ttl?: number;
  customInstallments?: CustomInstallment[];
  items?: PaymentItem[];
  fraudParams?: FraudCheckParameters;
  additionalParams?: Record<string, unknown>;
  cardBrandInstallments?: Map<string, CustomInstallment[]>;
};

export default InitCheckoutPaymentRequest;
