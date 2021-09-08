import Currency from '../model/Currency';
import Installment from '../model/Installment';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';

import {Card} from './dto/Card';
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
  conversationId?: string;
  externalId?: string;
  clientIp?: string;
  card?: Card;
  posAlias?: string;
  items: PaymentItem[];
  additionalParams?: Map<string, Record<string, unknown>>;
};

export default CreatePaymentRequest;
