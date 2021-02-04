import WalletTransactionType from '../model/WalletTransactionType';

type WalletTransactionResponse = {
  id: number;
  createdDate: Date;
  walletTransactionType: WalletTransactionType;
  amount: number;
  transactionId: number;
  walletId: number;
};

export default WalletTransactionResponse;
