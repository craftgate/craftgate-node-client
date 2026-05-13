const Craftgate = require('../../dist');
const fs = require('fs');
const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate
  .fileReporting()
  .retrieveReport(
    {
      fileType: Craftgate.Model.ReportFileType.CSV
    },
    49
  )
  .then(result => {
    console.info('Retrieve report', result);
    fs.writeFileSync('/tmp/report.csv', Buffer.from(result));
  })
  .catch(err => console.error('Failed to retrieve report', err));
