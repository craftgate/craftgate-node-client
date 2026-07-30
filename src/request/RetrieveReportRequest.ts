import ReportFileType from '../model/ReportFileType';

import BaseRequest from './BaseRequest';

type RetrieveReportRequest = BaseRequest & {
  fileType: ReportFileType;
};

export default RetrieveReportRequest;
