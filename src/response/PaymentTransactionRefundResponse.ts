import RefundDestinationType from '../model/RefundDestinationType';
import RefundStatus from '../model/RefundStatus';

type PaymentTransactionRefundResponse = {
  id: number;
  conversationId: string;
  createdDate: Date;
  status: RefundStatus;
  isAfterSettlement: boolean;
  refundPrice: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  authCode: string;
  hostReference: string;
  transId: string;
  currency: string;
  paymentTransactionId: number;
  paymentId: number;
  refundDestinationType: RefundDestinationType;
};

export default PaymentTransactionRefundResponse;
