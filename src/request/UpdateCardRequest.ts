import BaseRequest from './BaseRequest';

type UpdateCardRequest = BaseRequest & {
  cardUserKey: string;
  cardToken: string;
  expireYear: string;
  expireMonth: string;
  cardAlias?: string;
};

export default UpdateCardRequest;
