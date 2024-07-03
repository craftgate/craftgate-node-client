const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1,
};

craftgate.payment().completePosApmPayment(request)
    .then(result => console.info('Pos Apm complete payment successful', result))
    .catch(err => console.error('Failed to complete Pos Apm payment', err));
