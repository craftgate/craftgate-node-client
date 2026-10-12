enum TransactionPayoutStatus {
  Cancelled = 'CANCELLED',
  WaitingForPayout = 'WAITING_FOR_PAYOUT',
  PayoutStarted = 'PAYOUT_STARTED',
  PayoutCompleted = 'PAYOUT_COMPLETED',
  NoPayout = 'NO_PAYOUT'
}

export default TransactionPayoutStatus;
