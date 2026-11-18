import ReportFileType from '../model/ReportFileType';

import BaseRequest from './BaseRequest';
import {ReportFilter} from './dto/ReportFilter';

declare type CreateReportFromTemplateRequest = BaseRequest & {
  filters: Array<ReportFilter>;
  fileFormats?: Array<ReportFileType>;
};
export default CreateReportFromTemplateRequest;
