import PayoutDetailTransaction from './dto/PayoutDetailTransaction';
import BounceStatus from '../model/BounceStatus';

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
