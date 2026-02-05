type UpdatePaymentTransactionRequest = {
  subMerchantMemberPrice: number;
  subMerchantMemberId: number;
  blockageResolvedDate?: Date;
};

export default UpdatePaymentTransactionRequest;
