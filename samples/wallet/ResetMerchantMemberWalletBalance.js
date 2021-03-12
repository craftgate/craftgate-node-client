const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  walletAmount: -100
};

craftgate.wallet().resetMerchantMemberWalletBalance(request)
  .then(result => console.info('Merchant member wallet reset completed', result))
  .catch(err => console.error('Failed to reset merchant member wallet', err));
