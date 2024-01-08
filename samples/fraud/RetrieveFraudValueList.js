const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.fraud().retrieveValueList("ipList")
  .then(result => console.info('Retrieved fraud value list', result))
  .catch(err => console.error('Failed to retrieve fraud value list', err));
