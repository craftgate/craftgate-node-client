const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  price: 100.0,
  buyerMemberId: 1, // change it with a valid wallet owner, aka member id
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
};

craftgate.payment().createFundTransferDepositPayment(request)
  .then(result => console.info('Fund transfer deposit payment successful', result))
  .catch(err => console.error('Fund transfer deposit payment failed', err));
