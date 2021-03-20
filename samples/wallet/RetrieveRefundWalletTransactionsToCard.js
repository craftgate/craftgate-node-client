const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.wallet().retrieveRefundWalletTransactionsToCard(72)
  .then(result => console.info('Retrieved refund of wallet transactions to card', result))
  .catch(err => console.error('Failed to retrieve refunds of wallet transaction to card', err));
