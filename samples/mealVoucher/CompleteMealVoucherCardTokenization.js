const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const sessionId = 'session-id';

const request = {
  validationCode: '123456'
};

craftgate.mealVoucherCardTokenization().complete(sessionId, request)
  .then(result => console.info('Meal voucher card tokenization completed', result))
  .catch(err => console.error('Meal voucher card tokenization completion failed', err));
