import PosStatus from '../model/PosStatus';

import BaseRequest from './BaseRequest';

type UpdateMerchantPosStatusRequest = BaseRequest & {
  merchantPosId: number;
  posStatus: PosStatus;
};

export default UpdateMerchantPosStatusRequest;
