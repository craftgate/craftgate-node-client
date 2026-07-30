import ReportFileType from '../model/ReportFileType';

import BaseRequest from './BaseRequest';

type RetrieveDailyPaymentReportRequest = BaseRequest & {
  reportDate: string;
  fileType: ReportFileType;
};

export default RetrieveDailyPaymentReportRequest;
