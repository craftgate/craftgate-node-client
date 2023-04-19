const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  walletTransactionTypes: [Craftgate.Model.WalletTransactionType.DepositFromCard]
};

// change wallet id below with valid wallet id
craftgate.wallet().searchWalletTransactions(1, request)
  .then(result => console.info('Search wallet transactions', result))
  .catch(err => console.error('Failed to search wallet transactions', err));
