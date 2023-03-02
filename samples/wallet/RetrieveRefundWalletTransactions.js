const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// change wallet transaction id below with valid wallet transaction id
craftgate.wallet().retrieveRefundWalletTransactions(72)
  .then(result => console.info('Retrieved refund of wallet transaction', result))
  .catch(err => console.error('Failed to retrieve refunds of wallet transaction', err));
