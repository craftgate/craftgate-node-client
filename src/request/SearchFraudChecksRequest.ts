import FraudAction from '../model/FraudAction';
import FraudCheckStatus from '../model/FraudCheckStatus';
import PaymentStatus from '../model/PaymentStatus';

type SearchInstallmentsRequest = {
  page?: number;
  size?: number;
  action?: FraudAction;
  checkStatus?: FraudCheckStatus;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
  ruleId?: number;
  paymentId?: number;
  paymentStatus?: PaymentStatus;
};

export default SearchInstallmentsRequest;
