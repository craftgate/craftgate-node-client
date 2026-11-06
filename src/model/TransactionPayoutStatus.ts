enum TransactionPayoutStatus {
  Cancelled = 'CANCELLED',
  EliminatedByFullyRefund = 'ELIMINATED_BY_FULLY_REFUND',
  NoPayout = 'NO_PAYOUT',
  WaitingForPayout = 'WAITING_FOR_PAYOUT',
  PayoutStarted = 'PAYOUT_STARTED',
  PayoutCompleted = 'PAYOUT_COMPLETED'
}

export default TransactionPayoutStatus;
