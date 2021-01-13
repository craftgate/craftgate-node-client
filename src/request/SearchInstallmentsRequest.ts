import Currency from '../model/Currency';

type SearchInstallmentsRequest = {
  binNumber?: string;
  price: number;
  currency: Currency;
};

export default SearchInstallmentsRequest;
