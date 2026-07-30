import BaseRequest from './BaseRequest';

type RetrieveCardFromIvrRequest = BaseRequest & {
  callToken: string;
  cardUserKey: string;
};

export default RetrieveCardFromIvrRequest;
