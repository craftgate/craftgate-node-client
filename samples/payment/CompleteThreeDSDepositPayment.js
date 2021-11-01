const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1 // change it with a valid payment id
};

craftgate.payment().complete3DSDepositPayment(request)
  .then(result => console.info('Complete 3DS deposit payment successful', result))
  .catch(err => console.error('Failed to complete 3DS deposit payment', err));
