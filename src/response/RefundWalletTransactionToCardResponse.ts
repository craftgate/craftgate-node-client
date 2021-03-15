import RefundStatus from '../model/RefundStatus';
import WalletTransactionRefundCardTransactionType from '../model/WalletTransactionRefundCardTransactionType';

import PaymentError from './dto/PaymentError';

type RefundWalletTransactionToCardResponse = {
  id: number;
  createdDate: Date;
  refundPrice: number;
  authCode: string;
  hostReference: string;
  transId: string;
  transactionId: number;
  walletTransactionId: number;
  refundStatus: RefundStatus;
  paymentError: PaymentError;
  transactionType: WalletTransactionRefundCardTransactionType;
};

export default RefundWalletTransactionToCardResponse;
