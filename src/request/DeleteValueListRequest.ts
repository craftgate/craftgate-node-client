import BaseRequest from './BaseRequest';

type DeleteValueListRequest = BaseRequest & {
  listName: string;
};

export default DeleteValueListRequest;
