import ApmType from '../model/ApmType';
import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentSource from '../model/PaymentSource';
import PaymentType from '../model/PaymentType';

import CreatePaymentItemRequest from './CreatePaymentItemRequest';

type ApmPaymentInitRequest = {
  apmType: ApmType;
  merchantApmId: number;
  price: number;
  paidPrice: number;
  commissionRate: number;
  currency: Currency;
  paymentType: PaymentType.Apm;
  paymentGroup: PaymentGroup;
  paymentSource: PaymentSource;
  paymentChannel: string;
  conversationId: string;
  externalId: string;
  callbackUrl: string;
  buyerMemberId: number;
  apmOrderId: string;
  clientIp: string;
  checkoutFormToken: string;
  apmUserIdentity: string;
  additionalParams?: Map<string, Record<string, unknown>>;
  items: CreatePaymentItemRequest[];
};

export default ApmPaymentInitRequest;
