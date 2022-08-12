const Craftgate = require('../../dist');

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

const request = {
  minCreatedDate: createDate(-1, 0, 0, 0),
  maxCreatedDate: createDate(-1, 23, 59, 59),
  action: Craftgate.Model.FraudAction.Review,
  checkStatus: Craftgate.Model.FraudCheckStatus.Waiting
};

craftgate.fraud().searchFraudChecks(request)
  .then(result => console.info('Retrieved fraud check search results', result))
  .catch(err => console.error('Failed to search fraud checks', err));
