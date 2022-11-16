import Currency from '../model/Currency';

import WalletTransaction from './dto/WalletTransaction';

type FundTransferDepositPaymentResponse = {
  price: number;
  currency: Currency;
  buyerMemberId: number;
  conversationId: string;
  walletTransaction: WalletTransaction;
};

export default FundTransferDepositPaymentResponse;
