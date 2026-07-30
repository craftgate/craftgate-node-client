import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type CreateMemberWalletRequest = BaseRequest & {
  negativeAmountLimit: number;
  currency: Currency;
};

export default CreateMemberWalletRequest;
