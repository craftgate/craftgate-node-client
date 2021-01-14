import CraftgateClient from '../../dist/CraftgateClient';
import CreatePaymentRequest from '../../dist/request/CreatePaymentRequest';
import PaymentResponse from '../../dist/response/PaymentResponse';

import {Currency, PaymentGroup} from '../../dist/model';

const craftgate = new CraftgateClient({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request: CreatePaymentRequest = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  currency: Currency.TRY,
  paymentGroup: PaymentGroup.Product,
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
      price: 30.0
    },
    {
      name: 'Item 2',
      price: 50.0
    },
    {
      name: 'Item 3',
      price: 20.0
    }
  ]
};

craftgate.payment().createPayment(request)
  .then((result: PaymentResponse) => console.info('Payment successful', result))
  .catch((err: Error) => console.error('Payment failed', err));
