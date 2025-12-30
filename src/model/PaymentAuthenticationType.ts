enum PaymentAuthenticationType {
  ThreeDs = 'THREE_DS',
  NonThreeDs = 'NON_THREE_DS',
  BkmExpress = 'BKM_EXPRESS',
  ThreeDsFallbackToNonThreeDs = 'THREE_DS_FALLBACK_TO_NON_THREE_DS',
  Googlepay = 'GOOGLEPAY',
  Applepay = 'APPLEPAY',
  YkbWorldPay = 'YKB_WORLD_PAY',
  YkbWorldPayShoppingLoan = 'YKB_WORLD_PAY_SHOPPING_LOAN',
  GarantiPay = 'GARANTI_PAY',
  Juzdan = 'JUZDAN'
}

export default PaymentAuthenticationType;
