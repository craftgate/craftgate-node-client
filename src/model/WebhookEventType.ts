enum WebhookEventType {
  ApiAuth = 'API_AUTH',
  ApiVerifyAndAuth = 'API_VERIFY_AND_AUTH',
  CheckoutFormAuth = 'CHECKOUTFORM_AUTH',
  ThreeDSVerify = 'THREEDS_VERIFY',
  Refund = 'REFUND',
  RefundTx = 'REFUND_TX',
  PayoutCompleted = 'PAYOUT_COMPLETED',
  Autopilot = 'AUTOPILOT',
  WalletCreated = 'WALLET_CREATED',
  WalletTxCreated = 'WALLET_TX_CREATED',
  BnplNotification = 'BNPL_NOTIFICATION'
}

export default WebhookEventType;
