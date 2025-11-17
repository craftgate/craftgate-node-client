import ReportPeriod from '../model/ReportPeriod';
import ReportType from '../model/ReportType';
declare type CreateReportRequest = {
  startDate: Date;
  endDate: Date;
  reportType: ReportType;
  reportPeriod: ReportPeriod;
};
export default CreateReportRequest;
