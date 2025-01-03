import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';

import GarantiPayInstallment from './dto/GarantiPayInstallment';
import PaymentItem from './dto/PaymentItem';

type InitGarantiPayPaymentRequest = {
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
