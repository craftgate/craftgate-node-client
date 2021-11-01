import BounceStatus from '../model/BounceStatus';

import PayoutDetailTransaction from './dto/PayoutDetailTransaction';

type PaymentResponse = {
  rowDescription: string;
  payoutDate: Date;
  name: string;
  iban: string;
  payoutAmount: number;
  currency: string;
  merchantId: number;
  merchantType: string;
  settlementEarningsDestination: string;
  settlementSource: string;
  bounceStatus: BounceStatus;
  payoutTransactions: PayoutDetailTransaction[];
};

export default PaymentResponse;
