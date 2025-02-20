type PaymentItem = {
  name?: string;
  price: number;
  externalId?: string;
  subMerchantMemberId?: number;
  subMerchantMemberPrice?: number;
  subMerchantMemberTaxPrice?: number;
};

export default PaymentItem;
