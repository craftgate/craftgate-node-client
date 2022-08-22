const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 372
};

craftgate.fraud().searchFraudChecks(request)
  .then(result => console.info('Retrieved fraud check search results', result))
  .catch(err => console.error('Failed to search fraud checks', err));
