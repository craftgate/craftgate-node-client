import CardType from '../../model/CardType';
import FraudAction from '../../model/FraudAction';
import FraudCheckStatus from '../../model/FraudCheckStatus';
import PaymentStatus from '../../model/PaymentStatus';
import Status from '../../model/Status';

import FraudPaymentData from './FraudPaymentData';

type FraudCheck = {
  id: number;
  status: Status;
  cardType: CardType;
  action: FraudAction;
  checkStatus: FraudCheckStatus;
  paymentData: FraudPaymentData;
  ruleId: number;
  ruleName: string;
  ruleConditions: string;
  paymentId: number;
  paymentStatus: PaymentStatus;
};

export default FraudCheck;
