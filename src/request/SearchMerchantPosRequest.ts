import Currency from '../model/Currency';

type SearchMerchantPosRequest = {
  name: string;
  alias: string;
  currency: Currency;
  forceThreeDs: boolean;
  enableInstallment: boolean;
  enableForeignCard: boolean;
  bankName: string;
  page: number;
  size: number;
};

export default SearchMerchantPosRequest;
