import PosOperationType from '../../model/PosOperationType';
import PosUserType from '../../model/PosUserType';

type UpdateMerchantPosUser = {
  id: number;
  posUsername: string;
  posPassword: string;
  posUserType: PosUserType;
  posOperationType: PosOperationType;
};

export default UpdateMerchantPosUser;
