type PayoutBouncedTransaction = {
  id: number;
  iban: string;
  createdDate: Date;
  updatedDate: Date;
  payoutId: number;
  payoutAmount: number;
  contactName: string;
  contactSurname: string;
  legalCompanyTitle: string;
  rowDescription: string;
};

export default PayoutBouncedTransaction;
