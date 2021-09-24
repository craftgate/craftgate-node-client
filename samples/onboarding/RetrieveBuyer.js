const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.onboarding().retrieveMember(2110)
  .then(result => console.info('Buyer member retrieved', result))
  .catch(err => console.error('Failed to retrieve buyer member', err));
