import BaseRequest from './BaseRequest';

type UpdatePaymentTransactionRequest = BaseRequest & {
  subMerchantMemberPrice: number;
  subMerchantMemberId: number;
  blockageResolvedDate?: Date;
};

export default UpdatePaymentTransactionRequest;
