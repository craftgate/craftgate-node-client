const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// change payment id and payment transaction id below with valid data
craftgate.paymentReporting().retrievePaymentTransactionRefunds(1, 1)
  .then(result => console.info('Retrieve payment transaction refunds', result))
  .catch(err => console.error('Failed to retrieve payment transaction refunds', err));
