const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  refundPrice: 10
}

craftgate.wallet().refundWalletTransactionToCard(1, request)
  .then(result => console.info('Wallet transaction refunded to card', result))
  .catch(err => console.error('Failed to refund wallet transaction to card', err));
