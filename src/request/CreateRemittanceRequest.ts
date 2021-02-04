import RemittanceReasonType from '../model/RemittanceReasonType';

type CreateRemittanceRequest = {
  memberId: string;
  price: number;
  description: string;
  remittanceReasonType: RemittanceReasonType;
};

export default CreateRemittanceRequest;
