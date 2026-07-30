import BaseRequest from './BaseRequest';

type UpdateMemberWalletRequest = BaseRequest & {
  negativeAmountLimit: number;
};

export default UpdateMemberWalletRequest;
