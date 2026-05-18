import FraudAction from '../model/FraudAction';
import FraudOperation from '../model/FraudOperation';
import Status from '../model/Status';

type FraudRuleResponse = {
  id: number;
  status: Status;
  name: string;
  action: FraudAction;
  conditions: string;
  operations: FraudOperation[];
};

export default FraudRuleResponse;
