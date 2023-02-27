import PosOperationType from '../../model/PosOperationType';
import PosUserType from '../../model/PosUserType';

type CreateMerchantPosUser = {
  posUsername: string;
  posPassword: string;
  posUserType: PosUserType;
  posOperationType: PosOperationType;
};

export default CreateMerchantPosUser;
