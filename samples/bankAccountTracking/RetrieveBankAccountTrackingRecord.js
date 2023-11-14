const Craftgate = require('../../dist');
const Currency = require("../../dist/model/Currency");

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.bankAccountTracking().retrieveRecord(317)
  .then(results => console.info('Retrieve bank account tracking record results', results))
  .catch(err => console.error('Failed to retrieve bank account tracking record', err));
