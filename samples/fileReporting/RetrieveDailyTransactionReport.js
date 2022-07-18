const Craftgate = require('../../dist');
const fs = require('fs');
const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

// change the date/type according to your needs
craftgate.fileReporting().retrieveDailyTransactionReport({
  reportDate: '2022-07-08',
  fileType: Craftgate.Model.ReportFileType.CSV
})
  .then(result => {
    console.info('Retrieve daily report', result);
    fs.writeFileSync('/tmp/report.csv', Buffer.from(result));
  })
  .catch(err => console.error('Failed to retrieve daily report', err));
