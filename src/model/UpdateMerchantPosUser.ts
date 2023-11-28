import PosOperationType from './PosOperationType';
import PosUserType from './PosUserType';

export type UpdateMerchantPosUser = {
  id: number;
  posUsername: string;
  posPassword: string;
  posUserType: PosUserType;
  posOperationType: PosOperationType;
};

export default UpdateMerchantPosUser;
