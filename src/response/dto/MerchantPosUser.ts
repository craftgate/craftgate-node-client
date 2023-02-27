import PosOperationType from '../../model/PosOperationType';
import PosUserType from '../../model/PosUserType';

type MerchantPosUser = {
  id: number;
  posUsername: string;
  posPassword: string;
  posUserType: PosUserType;
  posOperationType: PosOperationType;
};

export default MerchantPosUser;
