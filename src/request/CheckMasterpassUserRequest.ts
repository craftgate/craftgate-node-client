import BaseRequest from './BaseRequest';

type CheckMasterpassUserRequest = BaseRequest & {
  masterpassGsmNumber: string;
};

export default CheckMasterpassUserRequest;
