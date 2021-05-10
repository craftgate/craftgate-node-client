import Currency from '../model/Currency';
import RefundStatus from '../model/RefundStatus';

type SearchPaymentRefundsRequest = {
  page?: number;
  size?: number;
  id?: number;
  paymentId?: number;
  buyerMemberId?: number;
  conversationId?: string;
  status?: RefundStatus;
  currency?: Currency;
  minRefundPrice?: number;
  maxRefundPrice?: number;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
};

export default SearchPaymentRefundsRequest;
