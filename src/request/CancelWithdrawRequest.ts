import BaseRequest from './BaseRequest';

type CancelWithdrawRequest = BaseRequest & {
  withdrawId: number;
};

export default CancelWithdrawRequest;
