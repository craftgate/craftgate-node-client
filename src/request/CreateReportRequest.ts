import ReportType from '../model/ReportType';
import ReportPeriod from '../model/ReportPeriod';
declare type CreateReportRequest = {
    startDate: Date;
    endDate: Date;
    reportType: ReportType;
    reportPeriod: ReportPeriod;
};
export default CreateReportRequest;
