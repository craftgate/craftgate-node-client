import BaseRequest from './BaseRequest';

type CloneCardRequest = BaseRequest & {
  sourceCardUserKey: string;
  sourceCardToken: string;
  targetCardUserKey: string;
  targetMerchantId: number;
};

export default CloneCardRequest;
