
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.fraud().deleteValueList("ipList")
  .then(() => console.info('Fraud value list deleted'))
  .catch(err => console.error('Failed to delete fraud value list', err));
