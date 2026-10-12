import BaseRequest from './BaseRequest';

type ExpireCheckoutPaymentRequest = BaseRequest & {
  token: string;
};

export default ExpireCheckoutPaymentRequest;
