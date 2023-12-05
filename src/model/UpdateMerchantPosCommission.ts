import Status from './Status';

type UpdateMerchantPosCommission = {
  cardBrandName?: string;
  installment: number;
  status: Status;
  blockageDay?: number;
  installmentLabel?: string;
  bankOnUsCreditCardCommissionRate: number;
  bankOnUsDebitCardCommissionRate?: number;
  bankNotOnUsCreditCardCommissionRate?: number;
  bankNotOnUsDebitCardCommissionRate?: number;
  bankForeignCardCommissionRate?: number;
  merchantCommissionRate?: number;
};

export default UpdateMerchantPosCommission;
