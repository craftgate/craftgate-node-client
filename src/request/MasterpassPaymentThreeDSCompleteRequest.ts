import BaseRequest from './BaseRequest';

type MasterpassPaymentThreeDSCompleteRequest = BaseRequest & {
  paymentId: number;
};

export default MasterpassPaymentThreeDSCompleteRequest;
