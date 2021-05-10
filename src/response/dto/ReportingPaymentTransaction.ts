import PaymentRefundStatus from '../../model/PaymentRefundStatus';
import MemberResponse from '../MemberResponse';

import PaymentTransaction from './PaymentTransaction';
import PayoutStatus from './PayoutStatus';

type ReportingPaymentTransaction = PaymentTransaction & {
  createdDate: Date;
  transactionStatusDate: Date;
  refundablePrice: number;
  subMerchantMember: MemberResponse;
  refundStatus: PaymentRefundStatus;
  payoutStatus: PayoutStatus;
  bankCommissionRate: number;
  bankCommissionRateAmount: number;
};

export default ReportingPaymentTransaction;
