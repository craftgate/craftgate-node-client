enum WalletTransactionType {
  PaymentRedeem = 'PAYMENT_REDEEM',
  RefundDeposit = 'REFUND_DEPOSIT',
  RefundTransactionDeposit = 'REFUND_TX_DEPOSIT',
  CancelRefundToWallet = 'CANCEL_REFUND_TO_WALLET',
  RefundTransactionToWallet = 'REFUND_TX_TO_WALLET',
  ManualRefundTransactionToWallet = 'MANUAL_REFUND_TX_TO_WALLET',
  DepositFromCard = 'DEPOSIT_FROM_CARD',
  Remittance = 'REMITTANCE',
  Loyalty = 'LOYALTY'
}

export default WalletTransactionType;
