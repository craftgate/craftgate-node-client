import Currency from '../model/Currency';
import RefundDestinationType from '../model/RefundDestinationType';
import RefundStatus from '../model/RefundStatus';
import RefundType from '../model/RefundType';

import PaymentTransactionRefundResponse from './PaymentTransactionRefundResponse';

type PaymentRefundResponse = {
  id: number;
  conversationId: string;
  createdDate: Date;
  status: RefundStatus;
  refundPrice: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  refundType: RefundType;
  refundDestinationType: RefundDestinationType;
  currency: Currency;
  paymentId: number;
  paymentTxRefunds: PaymentTransactionRefundResponse[];
};

export default PaymentRefundResponse;
