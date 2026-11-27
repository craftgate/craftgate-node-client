import Currency from '../model/Currency';
import PayoutApprovalStatus from '../model/PayoutApprovalStatus';

import PayoutItem from './dto/PayoutItem';

type PaymentTxPayoutResponse = {
  paymentTransactionId: number;
  currency: Currency;
  parity: number;
  approvalStatus: PayoutApprovalStatus;
  approvalStatusDate: Date;
  blockageResolvedDate: Date;
  createdDate: Date;
  payoutItems: PayoutItem[];
};

export default PaymentTxPayoutResponse;
