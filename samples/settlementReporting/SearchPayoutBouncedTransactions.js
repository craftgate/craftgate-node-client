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

// play with the request
const request = {
  startDate: createDate(-1, 0, 0, 0),
  endDate: createDate(-1, 23, 59, 59)
};

craftgate.settlementReporting().searchBouncedPayoutTransactions(request)
  .then(result => console.info('Search payout bounced transactions', result))
  .catch(err => console.error('Failed to search payout bounced transactions', err));
