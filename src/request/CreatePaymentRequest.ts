import Currency from '../model/Currency';
import Installment from '../model/Installment';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';

import {Card} from './dto/Card';
import FraudCheckParameters from './dto/FraudCheckParameters';
import PaymentItem from './dto/PaymentItem';

type CreatePaymentRequest = {
  price: number;
  paidPrice: number;
  walletPrice: number;
  installment: Installment;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup?: PaymentGroup;
  paymentPhase?: PaymentPhase;
  paymentChannel?: string;
  conversationId?: string;
  externalId?: string;
  clientIp?: string;
  bankOrderId?: string;
  card?: Card;
  posAlias?: string;
  fraudParams?: FraudCheckParameters;
  items: PaymentItem[];
  additionalParams?: Record<string, unknown>;
  retry?: boolean;
};

export default CreatePaymentRequest;
