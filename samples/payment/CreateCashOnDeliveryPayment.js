const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  apmType: Craftgate.Model.ApmType.CashOnDelivery,
  price: 100.0,
  paidPrice: 100.0,
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
  conversationId: '241cf73c-7ef1-4e29-a6cc-f37905f2fc3d',
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
  .then(result => console.info('Create Cash on Delivery payment successful', result))
  .catch(err => console.error('Failed to create Cash on Delivery payment', err));
