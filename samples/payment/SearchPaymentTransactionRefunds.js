const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1
};

craftgate.payment().searchPaymentTransactionRefunds(request)
  .then(results => console.info('Search payment transaction refunds response', results))
  .catch(err => console.error('Failed to search payment transaction refunds', err));
