const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  cardUserKey: 'fac377f2-ab15-4696-88d2-5e71b27ec378', // change it with a valid card user key
  cardToken: '11a078c4-3c32-4796-90b1-51ee5517a212' // change it with a valid card token
};

craftgate.payment().deleteStoredCard(request)
  .then(() => console.info('Stored card deleted'))
  .catch(err => console.error('Failed to delete stored card', err));
