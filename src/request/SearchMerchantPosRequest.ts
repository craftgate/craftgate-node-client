import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type SearchMerchantPosRequest = BaseRequest & {
  name?: string;
  alias?: string;
  currency?: Currency;
  enableInstallment?: boolean;
  enableForeignCard?: boolean;
  bankName?: string;
  page?: number;
  size?: number;
};

export default SearchMerchantPosRequest;
