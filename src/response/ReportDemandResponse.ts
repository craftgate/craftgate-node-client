import ReportPeriod from '../model/ReportPeriod';
import ReportType from '../model/ReportType';

declare type ReportDemandResponse = {
  id: string;
  reportType: ReportType;
  reportPeriod: ReportPeriod;
  startDate: Date;
  endDate: Date;
};
export default ReportDemandResponse;
