const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.settlement().deletePayoutAccount(11)
  .catch(err => console.error('Failed to delete payout account', err));
