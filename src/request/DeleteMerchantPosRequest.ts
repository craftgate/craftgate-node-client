import BaseRequest from './BaseRequest';

type DeleteMerchantPosRequest = BaseRequest & {
  merchantPosId: number;
};

export default DeleteMerchantPosRequest;
