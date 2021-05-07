const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1
};

craftgate.paymentReporting().searchPayments(request)
  .then(result => console.info('Search payments', result))
  .catch(err => console.error('Failed to search payments', err));
