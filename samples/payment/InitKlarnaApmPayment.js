const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  apmType: Craftgate.Model.ApmType.Klarna,
  price: 1.0,
  paidPrice: 1.0,
  currency: Craftgate.Model.Currency.EUR,
  paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  callbackUrl: 'https://www.your-website.com/craftgate-apm-callback',
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
  ],
  additionalParams: {
    country: 'de',
    locale: 'en-DE'
  }
};

craftgate.payment().initApmPayment(request)
  .then(result => console.info('Klarna Apm init payment successful', result))
  .catch(err => console.error('Failed to init Klarna Apm payment', err));
