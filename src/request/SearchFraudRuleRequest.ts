import FraudAction from '../model/FraudAction';
import FraudOperation from '../model/FraudOperation';

type SearchFraudRuleRequest = {
  name?: string;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
  action?: FraudAction;
  operation?: FraudOperation;
  merchantId?: number;
  page?: number;
  size?: number;
};

export default SearchFraudRuleRequest;
