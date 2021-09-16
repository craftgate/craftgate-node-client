const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// change the memberId (displayed as 1 below) with a valid id to run the sample
craftgate.onboarding().retrieveMember(1)
  .then(result => console.info('Retrieved sub merchant member', result))
  .catch(err => console.error('Failed to retrieve sub merchant member', err));
