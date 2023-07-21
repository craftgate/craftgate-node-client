import PayoutAccountType from '../model/PayoutAccountType';

type UpdatePayoutAccountRequest = {
  type: PayoutAccountType;
  externalAccountId: string;
};

export default UpdatePayoutAccountRequest;
