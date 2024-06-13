import PaymentRefundStatus from '../model/PaymentRefundStatus';

import BasePaymentResponse from './common/BasePaymentResponse';
import MemberResponse from './MemberResponse';
import ReportingPaymentRefundResponse from './ReportingPaymentRefundResponse';

type ReportingPaymentResponse = BasePaymentResponse & {
  retryCount: number;
  refundablePrice: number;
  refundStatus: PaymentRefundStatus;
  cardIssuerBankName: string;
  buyerMember: MemberResponse;
  refunds: ReportingPaymentRefundResponse[];
};

export default ReportingPaymentResponse;
