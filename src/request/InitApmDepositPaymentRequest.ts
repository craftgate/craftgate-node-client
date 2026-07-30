import ApmType from '../model/ApmType';
import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type InitApmDepositPaymentRequest = BaseRequest & {
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
  additionalParams?: Record<string, unknown>;
  clientIp?: string;
};

export default InitApmDepositPaymentRequest;
