import PayoutAccountType from '../model/PayoutAccountType';

import BaseRequest from './BaseRequest';

type UpdatePayoutAccountRequest = BaseRequest & {
  type: PayoutAccountType;
  externalAccountId: string;
};

export default UpdatePayoutAccountRequest;
