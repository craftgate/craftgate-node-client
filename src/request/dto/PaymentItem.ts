type PaymentItem = {
  name?: string;
  price: number;
  externalId?: string;
  subMerchantMemberId?: number;
  subMerchantMemberPrice?: number;
  blockageDay?: number;
};

export default PaymentItem;
