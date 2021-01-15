const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  memberId: 1
};

craftgate.wallet().searchWallets(request)
  .then(result => console.info('Search wallets', result))
  .catch(err => console.error('Failed to search wallets', err));
