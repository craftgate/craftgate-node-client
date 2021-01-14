type PaymentItem = {
  name: string;
  price: number;
  externalId?: string;
  subMerchantMemberId?: number;
  subMerchantMemberPrice?: number;
};

export default PaymentItem;
