type CompletePosApmPaymentRequest = {
  paymentId: number;
  additionalParams?: Map<string, Record<string, unknown>>;
};

export default CompletePosApmPaymentRequest;
