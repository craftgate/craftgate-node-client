enum WalletTransactionType {
  PaymentRedeem = 'PAYMENT_REDEEM',
  RefundDeposit = 'REFUND_DEPOSIT',
  Withdraw = 'WITHDRAW',
  RefundTransactionDeposit = 'REFUND_TX_DEPOSIT',
  CancelRefundToWallet = 'CANCEL_REFUND_TO_WALLET',
  CancelRefundToCard = 'CANCEL_REFUND_WALLET_TO_CARD',
  RefundTransactionToWallet = 'REFUND_TX_TO_WALLET',
  RefundTransactionToCard = 'REFUND_WALLET_TX_TO_CARD',
  RefundWalletTxFundTransfer = 'REFUND_WALLET_TX_FUND_TRANSFER',
  ManualRefundTransactionToWallet = 'MANUAL_REFUND_TX_TO_WALLET',
  SettlementEarnings = 'SETTLEMENT_EARNINGS',
  DepositFromCard = 'DEPOSIT_FROM_CARD',
  DepositFromApm = 'DEPOSIT_FROM_APM',
  DepositFromFundTransfer = 'DEPOSIT_FROM_FUND_TRANSFER',
  Remittance = 'REMITTANCE',
  Loyalty = 'LOYALTY',
  WithdrawCancel = 'WITHDRAW_CANCEL',
  MerchantBalanceReset = 'MERCHANT_BALANCE_RESET'
}

export default WalletTransactionType;
