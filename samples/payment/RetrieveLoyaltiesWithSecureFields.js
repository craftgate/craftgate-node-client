const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  secureFieldsToken: 'xxXXxx'
};

craftgate.payment().retrieveLoyalties(request)
  .then(result => console.info('Successfully retrieved loyalties with secure fields token', result))
  .catch(err => console.error('Failed to retrieve loyalties with secure fields token', err));
