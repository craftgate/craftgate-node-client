import RemittanceReasonType from '../model/RemittanceReasonType';
import RemittanceType from '../model/RemittanceType';
import Status from '../model/Status';

type RemittanceResponse = {
  id: number;
  createdDate: Date;
  status: Status;
  price: number;
  memberId: number;
  remittanceType: RemittanceType;
  remittanceReasonType: RemittanceReasonType;
  description: string;
};

export default RemittanceResponse;
