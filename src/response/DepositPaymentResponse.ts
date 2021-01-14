import Currency from '../model/Currency';
import PaymentStatus from '../model/PaymentStatus';
import PaymentType from '../model/PaymentType';

type DepositPaymentResponse = {
  id: number;
  createdDate: Date;
  price: number;
  currency: Currency;
  buyerMemberId?: number;
  conversationId: string;
  paymentType: PaymentType;
  paymentStatus: PaymentStatus;
  cardUserKey: string;
  cardToken: string;
};

export default DepositPaymentResponse;
