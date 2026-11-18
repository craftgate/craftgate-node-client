import ReportState from '../model/ReportState';

import {ReportFilter} from '../request/dto/ReportFilter';

declare type ReportFromTemplateResponse = {
  id: number;
  reportState: ReportState;
  filters: Array<ReportFilter>;
  columns: Array<string>;
  reportSchemaId: number;
};
export default ReportFromTemplateResponse;
