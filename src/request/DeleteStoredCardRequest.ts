import BaseRequest from './BaseRequest';

type DeleteStoredCardRequest = BaseRequest & {
  cardUserKey: string;
  cardToken: string;
};

export default DeleteStoredCardRequest;
