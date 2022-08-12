
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.fraud().updateFraudCheckStatus(257, Craftgate.Model.FraudCheckStatus.Fraud)
  .then(() => console.info('Fraud check status updated'))
  .catch(err => console.error('Failed to update fraud check status', err));
