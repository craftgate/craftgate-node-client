const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paidPrice: 100
};

craftgate.payment().postAuthPayment(1, request)
  .then(result => console.info('Post auth payment successful', result))
  .catch(err => console.error('Failed to post auth payment', err));
