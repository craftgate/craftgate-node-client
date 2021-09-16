const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// change payment transaction refund id below with a valid one
craftgate.payment().retrievePaymentTransactionRefund(1)
  .then(results => console.info('Retrieve payment transaction refund response', results))
  .catch(err => console.error('Failed to retrieve payment transaction refund', err));
