
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.fraud().removeValueFromValueList("ipList", "127.0.0.1")
  .then(() => console.info('Value removed from fraud value list'))
  .catch(err => console.error('Failed to remove value from fraud value list', err));
