const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// you can play with the search request below
const request = {
  page: 0,
  size: 10,
  currency: Craftgate.Model.Currency.TRY
};

craftgate.bankAccountTracking().searchRecords(request)
  .then(results => console.info('Search bank account tracking results', results))
  .catch(err => console.error('Failed to search bank account tracking records', err));
