const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.settlementReporting().retrievePaymentTransactionPayout(1)
  .then(result => console.info('Retrieve payment transaction payout', result))
  .catch(err => console.error('Failed to retrieve payment transaction payout', err));
