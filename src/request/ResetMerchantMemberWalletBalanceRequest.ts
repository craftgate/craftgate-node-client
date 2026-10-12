import BaseRequest from './BaseRequest';

type ResetMerchantMemberWalletBalanceRequest = BaseRequest & {
  walletAmount: number;
};

export default ResetMerchantMemberWalletBalanceRequest;
