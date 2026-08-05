import ReportFileType from '../model/ReportFileType';

import BaseRequest from './BaseRequest';

type RetrieveDailyTransactionReportRequest = BaseRequest & {
  reportDate: string;
  fileType: ReportFileType;
};

export default RetrieveDailyTransactionReportRequest;
