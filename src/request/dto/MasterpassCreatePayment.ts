import Currency from '../../model/Currency';
import Installment from '../../model/Installment';
import PaymentGroup from '../../model/PaymentGroup';
import PaymentPhase from '../../model/PaymentPhase';

import PaymentItem from './PaymentItem';

type MasterpassCreatePayment = {
  price: number;
  paidPrice: number;
  installment: Installment;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup?: PaymentGroup;
  paymentPhase?: PaymentPhase;
  paymentChannel?: string;
  conversationId?: string;
  externalId?: string;
  clientIp?: string;
  bankOrderId?: string;
  posAlias?: string;
  items: PaymentItem[];
  additionalParams?: Map<string, Record<string, unknown>>;
};

export default MasterpassCreatePayment;
