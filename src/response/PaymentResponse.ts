import FraudAction from '../model/FraudAction';

import BasePaymentResponse from './common/BasePaymentResponse';
import PaymentTransaction from './dto/PaymentTransaction';

type PaymentResponse = BasePaymentResponse & {
  cardUserKey: string;
  cardToken: string;
  fraudId: number;
  fraudAction: FraudAction;
  paymentTransactions: PaymentTransaction[];
  additionalData?: Map<string, any>;
};

export default PaymentResponse;
