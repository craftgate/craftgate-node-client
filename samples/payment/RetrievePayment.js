const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// change payment id below with a valid one
craftgate.payment().retrievePayment(1)
  .then(payment => console.info('Payment retrieved', payment))
  .catch(err => console.error('Failed to retrieve payment', err));
