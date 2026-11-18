const Craftgate = require('../../dist');
const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const now = new Date();
const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);

craftgate
  .fileReporting()
  .createReportFromTemplate(1, {
    filters: [Craftgate.ReportFilter.reportDate(twoDaysAgo, now)],
    fileFormats: [Craftgate.Model.ReportFileType.CSV]
  })
  .then(result => {
    console.info('Create report from template', result);
  })
  .catch(err => console.error('Failed create report from template', err));
