const Craftgate = require('../../dist');
const fs = require('fs');
const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

function createDate(days, hours, minutes, seconds) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  return date;
}

craftgate.fileReporting().createReport({
  startDate:  createDate(-1, 0, 0, 0),
  endDate: createDate(-1, 23, 59, 59),
  reportType: Craftgate.Model.ReportType.TRANSACTION,
  reportPeriod: Craftgate.Model.ReportPeriod.INSTANT
})
  .then(result => {
    console.info('Create report demand report', result);
  })
  .catch(err => console.error('Failed create report demand report', err));
