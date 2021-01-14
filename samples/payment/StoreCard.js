const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  cardHolderName: 'Haluk Demir',
  cardNumber: '5258640000000001',
  expireYear: '2044',
  expireMonth: '07',
  cardAlias: 'My Other Cards'
};

craftgate.payment().storeCard(request)
  .then(results => console.info('Store card response', results))
  .catch(err => console.error('Failed to store card', err));
