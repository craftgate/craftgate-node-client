import Currency from '../model/Currency';
import Installment from '../model/Installment';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';

import {Card} from './dto/Card';
import PaymentItem from './dto/PaymentItem';

type InitThreeDSPaymentRequest = {
  price: number;
  paidPrice: number;
  walletPrice: number;
  installment: Installment;
  buyerMemberId?: number;
  currency: Currency;
  paymentGroup?: PaymentGroup;
  paymentPhase?: PaymentPhase;
  conversationId?: string;
  card?: Card;
  posAlias?: string;
  callbackUrl: string;
  items: PaymentItem[];
};

export default InitThreeDSPaymentRequest;
