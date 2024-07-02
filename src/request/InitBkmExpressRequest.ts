import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';

import PaymentItem from './dto/PaymentItem';

type InitBkmExpressRequest = {
  price: number;
  paidPrice: number;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup?: PaymentGroup;
  paymentPhase?: PaymentPhase;
  conversationId?: string;
  bankOrderId?: string;
  items: PaymentItem[];
  enabledInstallments: number[];
};

export default InitBkmExpressRequest;
