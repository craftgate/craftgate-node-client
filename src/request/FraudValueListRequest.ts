import FraudValueType from '../model/FraudValueType';

import BaseRequest from './BaseRequest';

type FraudValueListRequest = BaseRequest & {
  listName: string;
  type: FraudValueType;
  label?: string;
  value?: string;
  durationInSeconds?: number;
  paymentId?: number;
};

export default FraudValueListRequest;
