import CardAssociation from '../../model/CardAssociation';
import CardType from '../../model/CardType';
import Currency from '../../model/Currency';
import Installment from '../../model/Installment';
import PaymentGroup from '../../model/PaymentGroup';
import PaymentPhase from '../../model/PaymentPhase';
import PaymentStatus from '../../model/PaymentStatus';
import PaymentType from '../../model/PaymentType';
import MerchantPos from '../dto/MerchantPos';
import PaymentError from '../dto/PaymentError';

type BasePaymentResponse = {
  id: number;
  createdDate: Date;
  price: number;
  paidPrice: number;
  walletPrice: number;
  currency: Currency;
  buyerMemberId: number;
  installment: Installment;
  conversationId: string;
  externalId: string;
  paymentType: PaymentType;
  paymentGroup: PaymentGroup;
  paymentStatus: PaymentStatus;
  paymentPhase: PaymentPhase;
  isThreeDS: boolean;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  paidWithStoredCard: boolean;
  binNumber: string;
  lastFourDigits: string;
  authCode: string;
  hostReference: string;
  transId: string;
  orderId: string;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  pos: MerchantPos;
  paymentError: PaymentError;
};

export default BasePaymentResponse;
