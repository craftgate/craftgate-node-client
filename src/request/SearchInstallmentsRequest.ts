import Currency from '../model/Currency';

type SearchInstallmentsRequest = {
  binNumber?: string;
  price: number;
  currency?: Currency;
  distinctCardBrandsWithLowestCommissions?: boolean;
};

export default SearchInstallmentsRequest;
