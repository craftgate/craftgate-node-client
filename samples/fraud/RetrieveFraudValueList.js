const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key-2',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

craftgate.fraud().retrieveValueList("ipList")
  .then(result => console.info('Retrieved fraud value list', result))
  .catch(err => console.error('Failed to retrieve fraud value list', err));
