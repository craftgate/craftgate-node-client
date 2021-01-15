import Status from '../model/Status';
import RemittanceReasonType from "../model/RemittanceReasonType";
import RemittanceType from "../model/RemittanceType";

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
