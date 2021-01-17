import CraftgateClient from '../../dist';

import Currency from '../../dist/model/Currency';
import PaymentGroup from '../../dist/model/PaymentGroup';

const craftgate = new CraftgateClient({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  currency: Currency.TRY,
  paymentGroup: PaymentGroup.ListingOrSubscription,
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
      externalId: '123d1297-839e-4bd6-a13b-4be31a6e12a8'
    },
    {
      name: 'Item 2',
      price: 50.0,
      externalId: '789d1297-839e-4bd6-a13b-4be31a6e13f7'
    },
    {
      name: 'Item 3',
      price: 20.0,
      externalId: '3a1d1297-839e-4bd6-a13b-4be31a6e18e6'
    }
  ]
};

craftgate.payment().createPayment(request)
  .then(result => console.info('Payment successful', result))
  .catch(err => console.error('Payment failed', err));
