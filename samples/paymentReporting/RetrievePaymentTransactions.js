const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.paymentReporting().retrievePaymentTransactions(1)
  .then(result => console.info('Retrieve payment transactions', result))
  .catch(err => console.error('Failed to retrieve payment transactions', err));
