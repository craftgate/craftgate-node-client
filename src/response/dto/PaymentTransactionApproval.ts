import ApprovalStatus from '../../model/ApprovalStatus';

type PaymentTransactionApproval = {
  paymentTransactionId: number;
  approvalStatus: ApprovalStatus;
  failedReason: string;
};

export default PaymentTransactionApproval;
