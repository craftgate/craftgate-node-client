import ApmType from '../model/ApmType';
import Currency from '../model/Currency';

type InitApmDepositPaymentRequest = {
  apmType: ApmType;
  merchantApmId: number;
  price: number;
  currency: Currency;
  buyerMemberId: number;
  paymentChannel?: string;
  conversationId?: string;
  externalId?: string;
  callbackUrl: string;
  apmOrderId?: string;
  apmUserIdentity?: string;
  additionalParams?: Map<string, Record<string, unknown>>;
  clientIp?: string;
};

export default InitApmDepositPaymentRequest;
