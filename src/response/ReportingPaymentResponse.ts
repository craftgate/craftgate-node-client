import PaymentRefundStatus from '../model/PaymentRefundStatus';

import BasePaymentResponse from './base/BasePaymentResponse';
import MemberResponse from './MemberResponse';
import ReportingPaymentRefundResponse from './ReportingPaymentRefundResponse';

type ReportingPaymentResponse = BasePaymentResponse & {
  retryCount: number;
  refundablePrice: number;
  refundStatus: PaymentRefundStatus;
  cardHolderName: string;
  cardIssuerBankName: string;
  mdStatus: number;
  bankCommissionRate: number;
  bankCommissionRateAmount: number;
  buyerMember: MemberResponse;
  refunds: ReportingPaymentRefundResponse[];
};

export default ReportingPaymentResponse;
