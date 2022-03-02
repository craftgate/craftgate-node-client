import PaymentRefundStatus from '../model/PaymentRefundStatus';

import BasePaymentResponse from './common/BasePaymentResponse';
import MemberResponse from './MemberResponse';
import ReportingPaymentRefundResponse from './ReportingPaymentRefundResponse';
import ReportingPaymentTransactionRefundResponse from './ReportingPaymentTransactionRefundResponse';

type ReportingPaymentResponse = BasePaymentResponse & {
  retryCount: number;
  refundablePrice: number;
  refundStatus: PaymentRefundStatus;
  cardIssuerBankName: string;
  mdStatus: number;
  buyerMember: MemberResponse;
  refunds: ReportingPaymentRefundResponse[];
  paymentTransactionRefunds: ReportingPaymentTransactionRefundResponse[];
};

export default ReportingPaymentResponse;
