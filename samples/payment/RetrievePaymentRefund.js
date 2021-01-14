const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().retrievePaymentRefund(1)
  .then(results => console.info('Retrieve payment refund response', results))
  .catch(err => console.error('Failed to retrieve payment refund', err));
