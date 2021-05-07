import PaymentRefundStatus from '../../model/PaymentRefundStatus';
import BasePaymentTransaction from '../base/BasePaymentTransaction';
import MemberResponse from '../MemberResponse';

import PayoutStatus from './PayoutStatus';

type ReportingPaymentTransaction = BasePaymentTransaction & {
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
