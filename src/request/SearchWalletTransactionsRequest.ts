import WalletTransactionType from '../model/WalletTransactionType';

import BaseRequest from './BaseRequest';

type SearchWalletTransactionsRequest = BaseRequest & {
  walletTransactionTypes: WalletTransactionType[];
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  page?: number;
  size?: number;
};

export default SearchWalletTransactionsRequest;
