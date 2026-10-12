import BaseRequest from './BaseRequest';

type MasterpassPaymentThreeDSInitRequest = BaseRequest & {
  referenceId: string;
  callbackUrl: string;
};

export default MasterpassPaymentThreeDSInitRequest;
