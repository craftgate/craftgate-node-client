const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1 // change it with a valid payment id
};

craftgate.payment().complete3DSPayment(request)
  .then(result => console.info('Complete 3DS payment successful', result))
  .catch(err => console.error('Failed to complete 3DS payment', err));
