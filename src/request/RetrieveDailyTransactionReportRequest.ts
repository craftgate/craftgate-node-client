import ReportFileType from '../model/ReportFileType';

type RetrieveDailyTransactionReportRequest = {
  reportDate: string;
  fileType: ReportFileType;
};

export default RetrieveDailyTransactionReportRequest;
