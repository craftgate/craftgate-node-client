import PaymentPhase from '../model/PaymentPhase';
import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';

import PaymentItem from './dto/PaymentItem';

type InitCheckoutPaymentRequest = {
  price: number;
  paidPrice: number;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup?: PaymentGroup;
  paymentPhase?: PaymentPhase;
  conversationId?: string;
  cardUserKey?: string;
  callbackUrl: string;
  enabledInstallments: number[];
  alwaysStoreCardAfterPayment: boolean;
  allowOnlyStoredCards: boolean;
  allowOnlyCreditCard?: boolean;
  items: PaymentItem[];
};

export default InitCheckoutPaymentRequest;
