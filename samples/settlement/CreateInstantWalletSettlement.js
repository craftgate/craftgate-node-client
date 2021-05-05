const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  excludedSubMerchantMemberIds: []
};

craftgate
  .settlement()
  .createInstantWalletSettlement(request)
  .then(result => console.info('Instant wallet settlement create response', result))
  .catch(err => console.error('Failed to create instant wallet settlement', err));
