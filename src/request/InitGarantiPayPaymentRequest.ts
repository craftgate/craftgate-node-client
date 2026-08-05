import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';

import BaseRequest from './BaseRequest';
import GarantiPayInstallment from './dto/GarantiPayInstallment';
import PaymentItem from './dto/PaymentItem';

type InitGarantiPayPaymentRequest = BaseRequest & {
  price: number;
  paidPrice: number;
  installments: GarantiPayInstallment[];
  callbackUrl: string;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup?: PaymentGroup;
  paymentChannel?: string;
  conversationId?: string;
  externalId?: string;
  clientIp?: string;
  bankOrderId?: string;
  posAlias?: string;
  items: PaymentItem[];
  enabledInstallments: number[];
};

export default InitGarantiPayPaymentRequest;
