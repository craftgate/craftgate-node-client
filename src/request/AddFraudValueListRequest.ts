import FraudOperation from '../model/FraudOperation';

import BaseRequest from './BaseRequest';

type AddCardFingerprintFraudValueListRequest = BaseRequest & {
  label?: string;
  durationInSeconds?: number;
  operationId?: string;
  operation?: FraudOperation;
};

export default AddCardFingerprintFraudValueListRequest;
