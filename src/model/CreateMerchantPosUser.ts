import PosOperationType from './PosOperationType';
import PosUserType from './PosUserType';

type CreateMerchantPosUser = {
  posUsername: string;
  posPassword: string;
  posUserType: PosUserType;
  posOperationType: PosOperationType;
};

export default CreateMerchantPosUser;
