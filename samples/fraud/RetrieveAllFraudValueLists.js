const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.fraud().retrieveAllValueLists()
  .then(result => console.info('Retrieved all fraud value lists results', result))
  .catch(err => console.error('Failed to retrieve all fraud value lists results', err));
