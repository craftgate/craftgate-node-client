import RefundDestinationType from '../model/RefundDestinationType';

import BaseRequest from './BaseRequest';

type RefundPaymentRequest = BaseRequest & {
  paymentId: number;
  conversationId?: string;
  refundDestinationType?: RefundDestinationType;
  chargeFromMe?: boolean;
};

export default RefundPaymentRequest;
