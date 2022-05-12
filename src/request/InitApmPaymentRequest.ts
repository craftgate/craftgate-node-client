import ApmType from '../model/ApmType';
import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';

import PaymentItem from './dto/PaymentItem';

type InitApmPaymentRequest = {
  apmType: ApmType;
  price: number;
  paidPrice: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  paymentChannel?: string;
  conversationId?: string;
  externalId?: string;
  callbackUrl: string;
  apmOrderId?: string;
  clientIp?: string;
  items: PaymentItem[];
};

export default InitApmPaymentRequest;
