const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  page: 0,
  size: 10,
};

craftgate.fraud().searchFraudRules(request)
  .then(result => console.info('Retrieved fraud rule search results', result))
  .catch(err => console.error('Failed to search fraud rule', err));
