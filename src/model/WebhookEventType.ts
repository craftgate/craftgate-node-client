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
  BnplNotification = 'BNPL_NOTIFICATION',
  MultiPaymentCompleted = 'MULTI_PAYMENT_COMPLETED',
  MultiPaymentExpired = 'MULTI_PAYMENT_EXPIRED',
  BkmExpressPaymentNotification = 'BKM_EXPRESS_PAYMENT_NOTIFICATION'
}

export default WebhookEventType;
