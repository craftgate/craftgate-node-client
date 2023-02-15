import Currency from '../model/Currency';

type CreateMemberWalletRequest = {
  negativeAmountLimit: number;
  currency: Currency;
};

export default CreateMemberWalletRequest;
