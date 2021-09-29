const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.onboarding().retrieveMember(1)
  .then(result => console.info('Retrieved sub merchant member', result))
  .catch(err => console.error('Failed to retrieve sub merchant member', err));
