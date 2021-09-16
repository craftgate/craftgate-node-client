const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0, // use it with a positive price if you need to pay with wallet
  installment: 1,
  buyerMemberId: 1, // use it if you need to specify wallet member
  posAlias: '46-akbank-260', // use it if you need to create payment on a specific pos
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.Product,
  card: { // remove card info if you need to pay with wallet
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
      externalId: '123d1297-839e-4bd6-a13b-4be31a6e12a8',
      subMerchantMemberId: 1,
      subMerchantMemberPrice: 27.0
    },
    {
      name: 'Item 2',
      price: 50.0,
      externalId: '789d1297-839e-4bd6-a13b-4be31a6e13f7',
      subMerchantMemberId: 2,
      subMerchantMemberPrice: 42.0
    },
    {
      name: 'Item 3',
      price: 20.0,
      externalId: '3a1d1297-839e-4bd6-a13b-4be31a6e18e6',
      subMerchantMemberId: 3,
      subMerchantMemberPrice: 18.0
    }
  ]
};

craftgate.payment().createPayment(request)
  .then(result => console.info('Payment successful', result))
  .catch(err => console.error('Payment failed', err));
