import BaseRequest from './BaseRequest';

type CompleteBkmExpressRequest = BaseRequest & {
  status: boolean;
  message: string;
  ticketId?: string;
  bkmExpressPaymentToken?: string;
};

export default CompleteBkmExpressRequest;
