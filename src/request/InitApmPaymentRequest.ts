import ApmType from '../model/ApmType';
import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';

import PaymentItem from './dto/PaymentItem';

type InitApmPaymentRequest = {
  apmType: ApmType;
  merchantApmId: number;
  price: number;
  paidPrice: number;
  buyerMemberId: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  paymentChannel?: string;
  conversationId?: string;
  externalId?: string;
  callbackUrl: string;
  apmOrderId?: string;
  apmUserIdentity?: string;
  additionalParams?: Record<string, unknown>;
  clientIp?: string;
  items: PaymentItem[];
};

export default InitApmPaymentRequest;
