import PaymentTransactionApproval from './dto/PaymentTransactionApproval';

type PaymentTransactionApprovalListResponse = {
  size: number;
  items: PaymentTransactionApproval[];
};

export default PaymentTransactionApprovalListResponse;
