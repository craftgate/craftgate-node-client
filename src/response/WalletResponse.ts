import Currency from '../model/Currency';

type WalletResponse = {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  amount: number;
  withdrawalAmount: number;
  negativeAmountLimit: number;
  currency: Currency;
  memberId: number;
};

export default WalletResponse;
