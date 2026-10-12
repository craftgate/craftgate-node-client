import BaseRequest from './BaseRequest';

type MasterpassRetrieveLoyaltiesRequest = BaseRequest & {
  msisdn: string;
  binNumber: string;
  cardName: string;
  masterpassIntegrationVersion?: number;
};

export default MasterpassRetrieveLoyaltiesRequest;
