import ClientType from '../model/ClientType';
import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';

import PaymentItem from './dto/PaymentItem';

type InitJuzdanPaymentRequest = {
  price: number;
  paidPrice: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  conversationId?: string;
  externalId?: string;
  callbackUrl: string;
  paymentPhase: PaymentPhase;
  paymentChannel?: string;
  buyerMemberId?: number;
  bankOrderId?: string;
  items: PaymentItem[];
  loanCampaignId?: number;
  clientType: ClientType;
};

export default InitJuzdanPaymentRequest;
