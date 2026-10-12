import BaseRequest from './BaseRequest';

type PostAuthPaymentRequest = BaseRequest & {
  paidPrice?: number;
};

export default PostAuthPaymentRequest;
