const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// change the memberId (displayed as 1 below) with a real id to run the sample
craftgate.onboarding().retrieveMember(1)
  .then(result => console.info('Buyer member retrieved', result))
  .catch(err => console.error('Failed to retrieve buyer member', err));
