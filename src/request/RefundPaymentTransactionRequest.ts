import RefundDestinationType from '../model/RefundDestinationType';

import BaseRequest from './BaseRequest';

type RefundPaymentTransactionRequest = BaseRequest & {
  paymentTransactionId: number;
  conversationId?: string;
  refundPrice?: number;
  refundDestinationType?: RefundDestinationType;
  chargeFromMe?: boolean;
};

export default RefundPaymentTransactionRequest;
