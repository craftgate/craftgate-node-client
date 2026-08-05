import Currency from '../model/Currency';
import RemittanceReasonType from '../model/RemittanceReasonType';

import BaseRequest from './BaseRequest';

type CreateRemittanceRequest = BaseRequest & {
  memberId: string;
  price: number;
  currency: Currency;
  description: string;
  remittanceReasonType?: RemittanceReasonType;
};

export default CreateRemittanceRequest;
