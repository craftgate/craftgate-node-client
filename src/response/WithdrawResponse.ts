import Currency from '../model/Currency';
import PayoutStatus from '../model/PayoutStatus';
import Status from '../model/Status';

type WithdrawResponse = {
  id: number;
  status: Status;
  memberId: number;
  payoutId: number;
  price: number;
  createdDate: Date;
  description: string;
  currency: Currency;
  payoutStatus: PayoutStatus;
};

export default WithdrawResponse;
