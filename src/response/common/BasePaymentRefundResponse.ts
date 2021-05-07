import Currency from '../../model/Currency';
import RefundDestinationType from '../../model/RefundDestinationType';
import RefundStatus from '../../model/RefundStatus';
import RefundType from '../../model/RefundType';

type BasePaymentRefundResponse = {
  id: number;
  createdDate: Date;
  status: RefundStatus;
  refundDestinationType: RefundDestinationType;
  refundType: RefundType;
  currency: Currency;
  refundPrice: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  conversationId: string;
  authCode: string;
  hostReference: string;
  transId: string;
  paymentId: number;
};

export default BasePaymentRefundResponse;
