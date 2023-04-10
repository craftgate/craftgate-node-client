import WalletTransactionType from '../model/WalletTransactionType';

type SearchWalletTransactionsRequest = {
  walletTransactionType?: WalletTransactionType;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  page?: number;
  size?: number;
};

export default SearchWalletTransactionsRequest;
