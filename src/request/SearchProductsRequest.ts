import Currency from '../model/Currency';

type SearchProductsRequest = {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  currency?: Currency;
  channel?: string;
  page?: number;
  size?: number;
};

export default SearchProductsRequest;
