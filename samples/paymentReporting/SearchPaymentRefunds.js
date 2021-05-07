const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1
};

craftgate.paymentReporting().searchPaymentRefunds(request)
  .then(result => console.info('Search payment refunds', result))
  .catch(err => console.error('Failed to search payment refunds', err));
