import FraudCheckStatus from '../model/FraudCheckStatus';

import BaseRequest from './BaseRequest';

type UpdateFraudCheckStatusRequest = BaseRequest & {
  id: number;
  checkStatus: FraudCheckStatus;
};

export default UpdateFraudCheckStatusRequest;
