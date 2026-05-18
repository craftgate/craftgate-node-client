const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  card: {
    cardHolderName: 'Haluk Demir',
    cardNumber: '5258640000000001',
    expireYear: '2044',
    expireMonth: '07',
    cvc: '000',
    cardAlias: 'My YKB Card'
  },
  paymentAuthenticationType: Craftgate.Model.CardVerificationAuthType.ThreeDs,
  callbackUrl: 'https://www.your-website.com/craftgate-3DSecure-card-verify-callback',
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  verificationPrice: 10,
  currency: Craftgate.Model.Currency.TRY,
  clientIp: '127.0.0.1'
};

craftgate.payment().verifyCard(request)
  .then(result => console.info('Verify card successful', result))
  .catch(err => console.error('Verify card failed', err));
