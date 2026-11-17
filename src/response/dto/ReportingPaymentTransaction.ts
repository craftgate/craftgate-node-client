import PaymentRefundStatus from '../../model/PaymentRefundStatus';
import MemberResponse from '../MemberResponse';

import PaymentTransaction from './PaymentTransaction';

type ReportingPaymentTransaction = PaymentTransaction & {
  createdDate: Date;
  transactionStatusDate: Date;
  refundablePrice: number;
  subMerchantMember: MemberResponse;
  refundStatus: PaymentRefundStatus;
  bankCommissionRate: number;
  bankCommissionRateAmount: number;
};

export default ReportingPaymentTransaction;
