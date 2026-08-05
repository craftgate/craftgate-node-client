import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type SearchInstallmentsRequest = BaseRequest & {
  binNumber?: string;
  price: number;
  currency?: Currency;
  distinctCardBrandsWithLowestCommissions?: boolean;
  loyaltyExists?: boolean;
};

export default SearchInstallmentsRequest;
