import BaseRequest from './BaseRequest';

type MasterpassPaymentCompleteRequest = BaseRequest & {
  referenceId: string;
  token: string;
};

export default MasterpassPaymentCompleteRequest;
