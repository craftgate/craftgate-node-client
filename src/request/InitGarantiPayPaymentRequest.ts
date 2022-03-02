import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentItem from './dto/PaymentItem';
import GarantiPayInstallment from './dto/GarantiPayInstallment';

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
};

export default InitGarantiPayPaymentRequest;
