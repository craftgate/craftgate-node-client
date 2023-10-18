const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1 // change it with a valid payment id
};

craftgate.payment().completePosApmPayment(request)
  .then(result => console.info('Complete POS APM payment successful', result))
  .catch(err => console.error('Failed to complete POS APM payment', err));
