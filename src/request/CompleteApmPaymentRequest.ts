type CompleteApmPaymentRequest = {
  paymentId: number;
  additionalParams?: Record<string, unknown>;
};

export default CompleteApmPaymentRequest;
