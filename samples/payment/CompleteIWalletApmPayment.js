const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1,
  additionalParams: {"passCode": "1234"}
};

craftgate.payment().completeApmPayment(request)
    .then(result => console.info('iWallet Apm complete payment successful', result))
    .catch(err => console.error('Failed to complete iWallet Apm payment', err));
