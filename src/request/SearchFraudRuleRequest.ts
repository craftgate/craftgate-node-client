import FraudAction from '../model/FraudAction';
import FraudOperation from '../model/FraudOperation';
import FraudRuleScope from '../model/FraudRuleScope';

import BaseRequest from './BaseRequest';

type SearchFraudRuleRequest = BaseRequest & {
  name?: string;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
  action?: FraudAction;
  operation?: FraudOperation;
  scope?: FraudRuleScope;
  merchantId?: number;
  page?: number;
  size?: number;
};

export default SearchFraudRuleRequest;
