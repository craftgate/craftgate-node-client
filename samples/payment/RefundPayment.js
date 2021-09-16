const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1, // change it with a valid paymentId
  refundDestinationType: Craftgate.Model.RefundDestinationType.Card,
};

craftgate.payment().refundPayment(request)
  .then(results => console.info('Refund payment response', results))
  .catch(err => console.error('Failed to refund payment', err));
