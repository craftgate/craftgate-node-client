const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.wallet().retrieveRefundableAmountOfWalletTransaction(1)
  .then(result => console.info('Retrieved refundable amount of wallet transaction', result))
  .catch(err => console.error('Failed to receive refundable amount of wallet transaction', err));
