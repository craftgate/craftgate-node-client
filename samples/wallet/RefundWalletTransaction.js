const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  refundPrice: 10
}

// change wallet transaction id below with valid wallet transaction id
craftgate.wallet().refundWalletTransaction(1, request)
  .then(result => console.info('Wallet transaction refunded', result))
  .catch(err => console.error('Failed to refund wallet transaction', err));
