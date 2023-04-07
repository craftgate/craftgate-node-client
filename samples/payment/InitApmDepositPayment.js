const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  apmType: Craftgate.Model.ApmType.Papara,
  price: 1.0,
  currency: Craftgate.Model.Currency.TRY,
  buyerMemberId: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  externalId: 'optional-externalId',
  callbackUrl: 'https://www.your-website.com/craftgate-apm-callback',
  clientIp: '127.0.0.1'
};

craftgate.payment().initApmDepositPayment(request)
  .then(result => console.info('Init Apm payment successful', result))
  .catch(err => console.error('Failed to init Apm payment', err));
