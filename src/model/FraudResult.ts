import FraudAction from './FraudAction';

export type FraudResult = {
  id: number;
  action: FraudAction;
  score: number;
};
