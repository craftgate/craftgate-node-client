import Currency from '../model/Currency';

type CreateWithdrawRequest = {
  price: number;
  memberId: number;
  description: string;
  currency: Currency;
};

export default CreateWithdrawRequest;
