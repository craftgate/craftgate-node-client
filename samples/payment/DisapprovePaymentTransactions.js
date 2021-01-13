const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentTransactionIds: [1, 2],
  isTransactional: true
};

craftgate.payment().disapprovePaymentTransactions(request)
  .then(results => console.info('Disapprove payment transactions response', results))
  .catch(err => console.error('Failed to disapprove payment transactions', err));
