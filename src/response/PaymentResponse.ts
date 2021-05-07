import BasePaymentResponse from './base/BasePaymentResponse';
import PaymentTransaction from './dto/PaymentTransaction';

type PaymentResponse = BasePaymentResponse & {
  cardUserKey: string;
  cardToken: string;
  paymentTransactions: PaymentTransaction[];
};

export default PaymentResponse;
