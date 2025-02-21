type CompleteBkmExpressRequest = {
  status: boolean;
  message: string;
  ticketId?: string;
  bkmExpressPaymentToken?: string;
};

export default CompleteBkmExpressRequest;
