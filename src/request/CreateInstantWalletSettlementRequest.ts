import BaseRequest from './BaseRequest';

type CreateInstantWalletSettlementRequest = BaseRequest & {
  excludedSubMerchantMemberIds: number[];
};

export default CreateInstantWalletSettlementRequest;
