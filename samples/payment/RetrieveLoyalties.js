const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    cardNumber: '4043080000000003',
    expireYear: '2044',
    expireMonth: '07',
    cvc: '000'
};

craftgate.payment().retrieveLoyalties(request)
  .then(result => console.info('Successfully retrieved loyalties with explicit card info', result))
  .catch(err => console.error('Failed to retrieve loyalties with explicit card info', err));
