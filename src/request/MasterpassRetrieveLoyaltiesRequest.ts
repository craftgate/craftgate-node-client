type MasterpassRetrieveLoyaltiesRequest = {
  msisdn: string;
  binNumber: string;
  cardName: string;
  masterpassIntegrationVersion?: number;
};

export default MasterpassRetrieveLoyaltiesRequest;
