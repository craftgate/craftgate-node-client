import RefundDestinationType from '../../model/RefundDestinationType';
import RefundStatus from '../../model/RefundStatus';

type BasePaymentTransactionRefundResponse = {
  id: number;
  createdDate: Date;
  status: RefundStatus;
  refundDestinationType: RefundDestinationType;
  currency: string;
  refundPrice: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  conversationId: string;
  authCode: string;
  hostReference: string;
  transId: string;
  isAfterSettlement: boolean;
  paymentTransactionId: number;
};

export default BasePaymentTransactionRefundResponse;
