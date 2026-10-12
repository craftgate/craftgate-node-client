import BaseRequest from './BaseRequest';

type MasterpassAccountTokenGenerateRequest = BaseRequest & {
  msisdn: string;
  userId: string;
};

export default MasterpassAccountTokenGenerateRequest;
