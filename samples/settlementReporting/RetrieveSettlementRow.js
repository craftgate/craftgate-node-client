const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.settlementReporting().retrieveSettlementRow(1)
  .then(result => console.info('Retrieve settlement row', result))
  .catch(err => console.error('Failed to retrieve settlement row', err));
