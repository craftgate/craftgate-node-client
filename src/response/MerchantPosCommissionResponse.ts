import CardBrand from '../model/CardBrand';
import Status from '../model/Status';

type MerchantPosCommissionResponse = {
  id: number;
  status: Status;
  installment: number;
  blockageDay?: number;
  installmentLabel?: string;
  cardBrandName?: CardBrand;
  bankOnUsCreditCardCommissionRate: number;
  bankNotOnUsCreditCardCommissionRate?: number;
  bankOnUsDebitCardCommissionRate?: number;
  bankNotOnUsDebitCardCommissionRate?: number;
  bankForeignCardCommissionRate?: number;
  merchantCommissionRate?: number;
};

export default MerchantPosCommissionResponse;
