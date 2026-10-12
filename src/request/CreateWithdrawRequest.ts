import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type CreateWithdrawRequest = BaseRequest & {
  price: number;
  memberId: number;
  description: string;
  currency: Currency;
};

export default CreateWithdrawRequest;
