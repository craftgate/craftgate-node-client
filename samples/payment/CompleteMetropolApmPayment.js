const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  paymentId: 1,
  additionalParams: {
      "otpCode": "00000",
      "productId": "1",
      "walletId": "1"
  }
};

craftgate.payment().completeApmPayment(request)
    .then(result => console.info('Metropol Apm complete payment successful', result))
    .catch(err => console.error('Failed to complete Metropol Apm payment', err));
