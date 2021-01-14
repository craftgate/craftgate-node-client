import Currency from '../model/Currency';
import RefundStatus from '../model/RefundStatus';
import RefundType from '../model/RefundType';

type DepositPaymentRefundResponse = {
  id: number;
  paymentId: number;
  currency: Currency;
  status: RefundStatus;
  conversationId: string;
  refundType: RefundType;
  refundPrice: number;
  createdDate: Date;
};

export default DepositPaymentRefundResponse;
