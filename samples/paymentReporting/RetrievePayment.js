const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.paymentReporting().retrievePayment(1)
  .then(result => console.info('Retrieve payment', result))
  .catch(err => console.error('Failed to retrieve payment', err));
