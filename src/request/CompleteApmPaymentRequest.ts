type CompleteApmPaymentRequest = {
  paymentId: number;
  additionalParams?: Map<string, Record<string, unknown>>;
};

export default CompleteApmPaymentRequest;
