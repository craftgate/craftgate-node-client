const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.settlementReporting().retrievePayoutDetails(1)
  .then(result => console.info('Retrieve payout details', result))
  .catch(err => console.error('Failed to retrieve payout details', err));
