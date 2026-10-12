import FileStatus from '../model/FileStatus';

import BaseRequest from './BaseRequest';

type SearchPayoutRowsRequest = BaseRequest & {
  page: number;
  size: number;
  fileStatus: FileStatus;
  startDate: Date;
  endDate: Date;
};

export default SearchPayoutRowsRequest;
