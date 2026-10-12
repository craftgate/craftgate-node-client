import BaseRequest from './BaseRequest';

type DeleteProductRequest = BaseRequest & {
  id: number;
};

export default DeleteProductRequest;
