const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  walletTransactionType: Craftgate.Model.WalletTransactionType.DepositFromCard
};

// change withdraw id below with valid withdraw id
craftgate.wallet().searchWalletTransactions(1, request)
  .then(result => console.info('Search wallet transactions', result))
  .catch(err => console.error('Failed to search wallet transactions', err));
