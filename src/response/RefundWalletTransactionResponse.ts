import RefundStatus from '../model/RefundStatus';
import WalletTransactionRefundTransactionType from '../model/WalletTransactionRefundTransactionType';

import PaymentError from './dto/PaymentError';

type RefundWalletTransactionResponse = {
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
  transactionType: WalletTransactionRefundTransactionType;
};

export default RefundWalletTransactionResponse;
