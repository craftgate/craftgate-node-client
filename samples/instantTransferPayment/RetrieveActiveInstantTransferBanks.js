const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().retrieveActiveBanks()
  .then(results => console.info('Retrieve instant transfer active banks response ', results))
  .catch(err => console.error('Failed to retrieve instant transfer active banks', err));
