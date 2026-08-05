import ReportPeriod from '../model/ReportPeriod';
import ReportType from '../model/ReportType';

import BaseRequest from './BaseRequest';
declare type CreateReportRequest = BaseRequest & {
  startDate: Date;
  endDate: Date;
  reportType: ReportType;
  reportPeriod: ReportPeriod;
};
export default CreateReportRequest;
