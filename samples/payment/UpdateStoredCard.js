const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  cardUserKey: 'fac377f2-ab15-4696-88d2-5e71b27ec378',
  cardToken: '11a078c4-3c32-4796-90b1-51ee5517a212',
  expireYear: '2044',
  expireMonth: '07',
};

craftgate.payment().updateCard(request)
  .then(results => console.info('Update stored card response', results))
  .catch(err => console.error('Failed to update stored card', err));
