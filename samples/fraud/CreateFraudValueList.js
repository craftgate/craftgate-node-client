
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.fraud().createValueList("ipList", Craftgate.Model.FraudValueType.Ip)
  .then(() => console.info('Fraud value list created'))
  .catch(err => console.error('Failed to create fraud value list', err));
