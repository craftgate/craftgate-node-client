
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.fraud().addValueToValueList("ipList", "127.0.0.1", null)
  .then(() => console.info('Value added to fraud value list'))
  .catch(err => console.error('Failed to add value to fraud value list', err));
