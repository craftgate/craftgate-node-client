const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  masterpassGsmNumber: '903000000000'
};

craftgate.payment().checkMasterpassUser(request)
  .then(results => console.info('Check masterpass user response', results))
  .catch(err => console.error('Failed to check masterpass user', err));
