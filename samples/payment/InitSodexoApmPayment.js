const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  apmType: Craftgate.Model.ApmType.Sodexo,
  price: 1.0,
  paidPrice: 1.0,
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  externalId: 'optional-externalId',
  callbackUrl: 'https://www.your-website.com/craftgate-apm-callback',
  apmUserIdentity: '5555555555',
  additionalParams: {"sodexoCode": "843195"},
  items: [
    {
      name: 'Item 1',
      price: 0.4,
      externalId: '123d1297-839e-4bd6-a13b-4be31a6e12a8'
    },
    {
      name: 'Item 2',
      price: 0.6,
      externalId: '789d1297-839e-4bd6-a13b-4be31a6e13f7'
    }
  ]
};

craftgate.payment().initApmPayment(request)
  .then(result => console.info('Sodexo Apm payment successful', result))
  .catch(err => console.error('Failed to create Sodexo Apm payment', err));
