import FileStatus from '../model/FileStatus';

type SearchPayoutRowsRequest = {
  page: number;
  size: number;
  fileStatus: FileStatus;
  startDate: Date;
  endDate: Date;
};

export default SearchPayoutRowsRequest;
