enum PaymentStatus {
  Failure = 'FAILURE',
  Success = 'SUCCESS',
  Init3DSPayment = 'INIT_THREEDS',
  Callback3DSecure = 'CALLBACK_THREEDS',
  Waiting = 'WAITING'
}

export default PaymentStatus;
