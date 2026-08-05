import BaseRequest from './BaseRequest';

type DeletePayoutAccountRequest = BaseRequest & {
  id: number;
};

export default DeletePayoutAccountRequest;
