const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.wallet().retrieveMerchantMemberWallet()
  .then(result => console.info('Merchant member wallet received', result))
  .catch(err => console.error('Failed to receive merchant member wallet', err));
