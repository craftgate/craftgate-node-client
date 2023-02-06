type InstallmentPrice = {
  posAlias: string;
  installmentNumber: number;
  installmentPrice: number;
  bankCommissionRate: number;
  merchantCommissionRate: number;
  totalPrice: number;
  installmentLabel: string;
  loyaltySupported: boolean;
};

export default InstallmentPrice;
