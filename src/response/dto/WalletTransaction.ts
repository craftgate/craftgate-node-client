import WalletTransactionType from '../../model/WalletTransactionType';

type WalletTransaction = {
  id: number;
  walletTransactionType: WalletTransactionType;
  amount: number;
  walletId: number;
};

export default WalletTransaction;
