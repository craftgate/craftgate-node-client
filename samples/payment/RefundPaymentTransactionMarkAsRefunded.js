const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentTransactionId: 1, // change it with a valid paymentTransactionId
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  refundPrice: 20
};

craftgate.payment().refundPaymentTransactionMarkAsRefunded(request)
  .then(results => console.info('Retrieve payment transaction mark as refunded response', results))
  .catch(err => console.error('Failed to retrieve payment transaction mark as refunded', err));
