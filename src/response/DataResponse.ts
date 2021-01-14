type DataResponse<T> = {
  page: number;
  size: number;
  totalSize: number;
  items: T[];
};

export default DataResponse;
