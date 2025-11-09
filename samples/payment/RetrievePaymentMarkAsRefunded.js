const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1, // change it with a valid paymentId
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5'
};

craftgate.payment().refundPaymentMarkAsRefunded(request)
  .then(results => console.info('Retrieve payment mark as refunded response', results))
  .catch(err => console.error('Failed to retrieve payment mark as refunded', err));
