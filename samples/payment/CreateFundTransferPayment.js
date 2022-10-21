const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  apmType: Craftgate.Model.ApmType.FundTransfer,
  price: 100.0,
  paidPrice: 100.0,
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
  conversationId: '2bc39889-b34f-40b0-abb0-4ab344360705',
  callbackUrl: 'https://www.your-website.com/craftgate-apm-callback',
  items: [
    {
      name: 'Item 1',
      price: 40,
      externalId: '123d1297-839e-4bd6-a13b-4be31a6e12a8'
    },
    {
      name: 'Item 2',
      price: 60,
      externalId: '789d1297-839e-4bd6-a13b-4be31a6e13f7'
    }
  ]
};

craftgate.payment().createApmPayment(request)
  .then(result => console.info('Create Fund Transfer payment successful', result))
  .catch(err => console.error('Failed to create Fund Transfer payment', err));
