import PosOperationType from './PosOperationType';
import PosUserType from './PosUserType';

type UpdateMerchantPosUser = {
  id: number;
  posUsername: string;
  posPassword: string;
  posUserType: PosUserType;
  posOperationType: PosOperationType;
};

export default UpdateMerchantPosUser;
