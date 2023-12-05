import PosOperationType from './PosOperationType';
import PosUserType from './PosUserType';

export type MerchantPosUser = {
  id: number;
  posUsername: string;
  posPassword: string;
  posUserType: PosUserType;
  posOperationType: PosOperationType;
};

export default MerchantPosUser;
