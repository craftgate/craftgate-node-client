const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  price: 50.0,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5'
};

craftgate.payment().refundDepositPayment(1, request)
  .then(results => console.info('Refund deposit payment response', results))
  .catch(err => console.error('Failed to refund deposit payment', err));
