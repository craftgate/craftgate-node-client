const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  apmType: Craftgate.Model.ApmType.Setcard,
  mealVoucherCardTokenizationData: {
    callbackUrl: 'https://www.yourdomain.com/callback'
  }
};

craftgate.mealVoucherCardTokenization().init(request)
  .then(result => console.info('Meal voucher card tokenization initiated', result))
  .catch(err => console.error('Meal voucher card tokenization failed', err));
