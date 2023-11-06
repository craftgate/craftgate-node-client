type CreatePaymentItemRequest = {
  externalId: string;
  name: string;
  price: number;
  subMerchantMemberId: number;
  subMerchantMemberPrice: number;
};

export default CreatePaymentItemRequest;
