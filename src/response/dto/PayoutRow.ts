type PayoutRow = {
  name: string;
  iban: string;
  payoutId: number;
  settlementRowId: number;
  merchantId: number;
  merchantType: string;
  payoutAmount: number;
  payoutDate: Date;
};

export default PayoutRow;
