var Craftgate = require('../../dist');

var craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

var request = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.Product,
  card: {
    cardHolderName: 'Haluk Demir',
    cardNumber: '5258640000000001',
    expireYear: '2044',
    expireMonth: '07',
    cvc: '000'
  },
  items: [
    {
      name: 'Item 1',
      price: 30.0,
      subMerchantMemberId: 1,
      subMerchantMemberPrice: 27.0
    },
    {
      name: 'Item 2',
      price: 50.0,
      subMerchantMemberId: 1,
      subMerchantMemberPrice: 42.0
    },
    {
      name: 'Item 3',
      price: 20.0,
      subMerchantMemberId: 1,
      subMerchantMemberPrice: 18.0
    }
  ]
};

craftgate.payment().createPayment(request)
  .then(function (result) {
    console.info('Payment successful', result);
  })
  .catch(function (err) {
    console.error('Payment failed', err);
  });
