import FraudAction from '../model/FraudAction';
import FraudOperation from '../model/FraudOperation';

import BaseRequest from './BaseRequest';

type SearchFraudRuleRequest = BaseRequest & {
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
