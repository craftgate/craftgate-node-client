const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentTransactionIds: [1, 2],  // change it with valid payment transaction ids
  isTransactional: true
};

craftgate.payment().approvePaymentTransactions(request)
  .then(results => console.info('Approve payment transactions response', results))
  .catch(err => console.error('Failed to approve payment transactions', err));
