import WalletTransactionType from '../model/WalletTransactionType';

type SearchWalletTransactionsRequest = {
  walletTransactionType?: WalletTransactionType;
  page?: number;
  size?: number;
};

export default SearchWalletTransactionsRequest;
