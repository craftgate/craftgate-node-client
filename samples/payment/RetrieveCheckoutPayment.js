const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().retrieveCheckoutPayment('456d1297-908e-4bd6-a13b-4be31a6e47d5')
  .then(payment => console.info('Checkout payment retrieved', payment))
  .catch(err => console.error('Failed to retrieve checkout payment', err));
