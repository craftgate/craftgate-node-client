import Currency from '../model/Currency';

type SearchInstallmentsRequest = {
  binNumber?: string;
  price: number;
  currency?: Currency;
  distinctCardBrandsWithLowestCommissions?: boolean;
  loyaltyExists?: boolean;
};

export default SearchInstallmentsRequest;
