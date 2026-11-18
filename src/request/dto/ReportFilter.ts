export type ReportFilter = {
  name: string;
  values: Array<any>;
};

const REPORT_DATE_FILTER_NAME = 'reportDate';

function pad(value: number, length = 2): string {
  let result = String(value);
  while (result.length < length) {
    result = '0' + result;
  }
  return result;
}

// The backend expects ISO local date-time without a zone, so the local wall-clock time is sent without "Z".
function toLocalDateTime(date: Date): string {
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad(date.getMilliseconds(), 3)}`
  );
}

export const ReportFilter = {
  reportDate(startDate: Date, endDate: Date): ReportFilter {
    return {name: REPORT_DATE_FILTER_NAME, values: [toLocalDateTime(startDate), toLocalDateTime(endDate)]};
  }
};
