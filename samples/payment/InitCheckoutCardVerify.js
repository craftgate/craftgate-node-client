const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  verificationPrice: 10,
  currency: Craftgate.Model.Currency.TRY,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  callbackUrl: 'https://www.your-website.com/craftgate-checkout-card-verify-callback',
  paymentAuthenticationType: Craftgate.Model.CardVerificationAuthType.NonThreeDs
};

craftgate.payment().initCheckoutCardVerify(request)
  .then(result => console.info('Init checkout card verify successful', result))
  .catch(err => console.error('Init checkout card verify failed', err));
