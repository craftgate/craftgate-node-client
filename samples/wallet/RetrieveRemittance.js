const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});


craftgate.wallet().retrieveRemittance(1)
  .then(result => console.info('Remittance retrieved', result))
  .catch(err => console.error('Failed to retrieve remittance', err));
