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
  payoutTransactions: PayoutDetailTransaction[];
};

export default PaymentResponse;
