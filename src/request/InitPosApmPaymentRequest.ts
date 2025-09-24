import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';
import PosApmPaymentProvider from '../model/PosApmPaymentProvider';

import FraudCheckParameters from './dto/FraudCheckParameters';
import PaymentItem from './dto/PaymentItem';
import PosApmInstallment from './dto/PosApmInstallment';

type InitPosApmPaymentRequest = {
  price: number;
  paidPrice: number;
  posAlias: string;
  currency: Currency;
  conversationId?: string;
  externalId?: string;
  callbackUrl: string;
  paymentGroup?: PaymentGroup;
  paymentPhase: PaymentPhase;
  paymentChannel?: string;
  buyerMemberId?: number;
  bankOrderId?: string;
  clientIp?: string;
  items: PaymentItem[];
  additionalParams?: Record<string, unknown>;
  installments: PosApmInstallment[];
  paymentProvider: PosApmPaymentProvider;
  fraudParams?: FraudCheckParameters;
  checkoutFormToken?: string;
};

export default InitPosApmPaymentRequest;
