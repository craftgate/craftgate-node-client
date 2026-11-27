import Currency from '../model/Currency';
import PaymentProvider from '../model/PaymentProvider';

import BaseRequest from './BaseRequest';

type SearchInstallmentsRequest = BaseRequest & {
  binNumber?: string;
  price: number;
  currency?: Currency;
  distinctCardBrandsWithLowestCommissions?: boolean;
  loyaltyExists?: boolean;
  paymentProvider?: PaymentProvider;
};

export default SearchInstallmentsRequest;
