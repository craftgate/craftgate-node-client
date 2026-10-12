enum PaymentAuthenticationType {
  ThreeDs = 'THREE_DS',
  NonThreeDs = 'NON_THREE_DS',
  BkmExpress = 'BKM_EXPRESS',
  ApplePay = 'APPLEPAY',
  CardVerification = 'CARD_VERIFICATION',
  GarantiPay = 'GARANTI_PAY',
  GooglePay = 'GOOGLEPAY',
  IsPay = 'ISPAY',
  Juzdan = 'JUZDAN',
  PosApm = 'POS_APM',
  ThreeDsFallbackToNonThreeDs = 'THREE_DS_FALLBACK_TO_NON_THREE_DS',
  YkbWorldPay = 'YKB_WORLD_PAY',
  YkbWorldPayShoppingLoan = 'YKB_WORLD_PAY_SHOPPING_LOAN'
}

export default PaymentAuthenticationType;
