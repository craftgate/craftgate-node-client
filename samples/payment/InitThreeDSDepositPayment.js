const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  price: 100.0,
  buyerMemberId: 1, // change it with a valid member id
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  currency: Craftgate.Model.Currency.TRY,
  callbackUrl: 'https://www.your-website.com/craftgate-3DSecure-callback',
  card: {
    cardHolderName: 'Haluk Demir',
    cardNumber: '5258640000000001',
    expireYear: '2044',
    expireMonth: '07',
    cvc: '000'
  }
};

craftgate.payment().init3DSDepositPayment(request)
  .then(result => console.info('Init 3ds deposit payment successful', result))
  .catch(err => console.error('Failed to init 3ds deposit payment', err));
