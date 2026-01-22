const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1,
  additionalParams: {"otpCode": "784294"}
};

craftgate.payment().completeApmPayment(request)
    .then(result => console.info('Tokenflex Apm complete payment successful', result))
    .catch(err => console.error('Failed to complete Tokenflex Apm payment', err));
