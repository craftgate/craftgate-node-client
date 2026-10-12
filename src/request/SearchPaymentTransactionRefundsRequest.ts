import Currency from '../model/Currency';
import RefundStatus from '../model/RefundStatus';

import BaseRequest from './BaseRequest';

type SearchPaymentTransactionRefundsRequest = BaseRequest & {
  page?: number;
  size?: number;
  id?: number;
  paymentId?: number;
  paymentTransactionId?: number;
  buyerMemberId?: number;
  conversationId?: number;
  status?: RefundStatus;
  currency?: Currency;
  minRefundPrice?: number;
  maxRefundPrice?: number;
  isAfterSettlement?: boolean;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
};

export default SearchPaymentTransactionRefundsRequest;
