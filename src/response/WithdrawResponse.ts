import Currency from '../model/Currency';
import Status from '../model/Status';
import TransactionPayoutStatus from '../model/TransactionPayoutStatus';

type WithdrawResponse = {
  id: number;
  status: Status;
  memberId: number;
  price: number;
  createdDate: Date;
  description: string;
  currency: Currency;
  payoutStatus: TransactionPayoutStatus;
};

export default WithdrawResponse;
