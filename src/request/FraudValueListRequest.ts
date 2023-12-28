import FraudValueType from '../model/FraudValueType';

type FraudValueListRequest = {
  listName: string;
  type: FraudValueType;
  label?: string;
  value?: string;
  durationInSeconds?: number;
  paymentId?: number;
};

export default FraudValueListRequest;
