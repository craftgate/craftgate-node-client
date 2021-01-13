const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().retrievePaymentTransactionRefund(1)
  .then(results => console.info('Retrieve payment transaction refund response', results))
  .catch(err => console.error('Failed to retrieve payment transaction refund', err));
