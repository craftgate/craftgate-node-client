import BaseRequest from './BaseRequest';

type RemoveValueFromValueListRequest = BaseRequest & {
  listName: string;
  valueId: string;
};

export default RemoveValueFromValueListRequest;
