import ReportFileType from '../model/ReportFileType';

type RetrieveDailyPaymentReportRequest = {
  reportDate: string;
  fileType: ReportFileType;
};

export default RetrieveDailyPaymentReportRequest;
