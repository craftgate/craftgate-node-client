import Currency from '../model/Currency';
import RemittanceReasonType from '../model/RemittanceReasonType';

type CreateRemittanceRequest = {
  memberId: string;
  price: number;
  currency: Currency;
  description: string;
  remittanceReasonType?: RemittanceReasonType;
};

export default CreateRemittanceRequest;
