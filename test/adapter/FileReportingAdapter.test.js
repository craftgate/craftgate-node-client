const test = require('ava');
const nock = require('nock');

const Craftgate = require('../../dist');

const fileReportingAdapter = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
}).fileReporting();

const startDate = new Date(2025, 10, 19, 9, 15, 31, 622);
const endDate = new Date(2025, 10, 27, 9, 15, 31, 643);
const startJson = '2025-11-19T09:15:31.622';
const endJson = '2025-11-27T09:15:31.643';

const reply = {
  data: {id: 5, reportState: 'DEMANDED', filters: [], columns: ['a', 'b'], reportSchemaId: 9}
};

async function createFromTemplate(request) {
  let body;
  const scope = nock('http://localhost:8000')
    .post('/file-reporting/v1/report-templates/7/reports', b => {
      body = b;
      return true;
    })
    .reply(200, reply);
  const result = await fileReportingAdapter.createReportFromTemplate(7, request);
  scope.done();
  return {body, result};
}

test('should create report from template with report date filter and file format', async t => {
  const {body, result} = await createFromTemplate({
    filters: [Craftgate.ReportFilter.reportDate(startDate, endDate)],
    fileFormats: [Craftgate.Model.ReportFileType.XLSX]
  });

  t.deepEqual(body, {
    filters: [{name: 'reportDate', values: [startJson, endJson]}],
    fileFormats: ['XLSX']
  });
  t.is(result.id, 5);
  t.is(result.reportState, Craftgate.Model.ReportState.DEMANDED);
  t.deepEqual(result.columns, ['a', 'b']);
  t.is(result.reportSchemaId, 9);
});

test('should omit file formats when not set', async t => {
  const {body} = await createFromTemplate({
    filters: [Craftgate.ReportFilter.reportDate(startDate, endDate)]
  });

  t.deepEqual(body, {filters: [{name: 'reportDate', values: [startJson, endJson]}]});
  t.false('fileFormats' in body);
});

test('should keep filters in insertion order', async t => {
  const {body} = await createFromTemplate({
    filters: [{name: 'status', values: ['SUCCESS']}, Craftgate.ReportFilter.reportDate(startDate, endDate)],
    fileFormats: [Craftgate.Model.ReportFileType.CSV]
  });

  t.deepEqual(body, {
    filters: [
      {name: 'status', values: ['SUCCESS']},
      {name: 'reportDate', values: [startJson, endJson]}
    ],
    fileFormats: ['CSV']
  });
});
