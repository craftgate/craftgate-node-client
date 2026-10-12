import UpdateMerchantPosCommission from '../model/UpdateMerchantPosCommission';

import BaseRequest from './BaseRequest';

type UpdateMerchantPosCommissionRequest = BaseRequest & {
  commissions: UpdateMerchantPosCommission[];
};

export default UpdateMerchantPosCommissionRequest;
