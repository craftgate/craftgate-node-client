import Currency from '../model/Currency';

type SearchProductsRequest = {
  id: number;
  name?: string;
  orderId: string;
  conversationId: string;
  externalId: string;
  minPrice?: number;
  maxPrice?: number;
  currency?: Currency;
  channel?: string;
  minExpiresAt?: string;
  maxExpiresAt?: string;
  page?: number;
  size?: number;
};

export default SearchProductsRequest;
