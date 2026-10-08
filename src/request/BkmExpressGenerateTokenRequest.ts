import BaseRequest from './BaseRequest';

type BkmExpressGenerateTokenRequest = BaseRequest & {
  gsmNumber: string;
  userId: string;
};

export default BkmExpressGenerateTokenRequest;
