const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentTransactionIds: [1, 2]
};

craftgate.settlementReporting().searchPaymentTransactionPayouts(request)
  .then(result => console.info('Search payment transaction payouts', result))
  .catch(err => console.error('Failed to search payment transaction payouts', err));
