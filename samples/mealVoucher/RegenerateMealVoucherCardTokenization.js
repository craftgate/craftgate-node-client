const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const sessionId = 'session-id';

const request = {
  mealVoucherCardTokenizationData: {
    cardNumber: '1234567890123456',
    gsmNumber: '5555555555'
  }
};

craftgate.mealVoucherCardTokenization().regenerate(sessionId, request)
  .then(result => console.info('Meal voucher card tokenization regenerated', result))
  .catch(err => console.error('Meal voucher card tokenization regeneration failed', err));
