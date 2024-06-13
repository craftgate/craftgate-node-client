const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  providerCardToken: '45f12c74-3000-465c-96dc-876850e7dd7a',
  externalId: '1001',
  providerCardUserId: "0309ac2d-c5a5-4b4f-a91f-5c444ba07b24"
};

craftgate.payment().retrieveProviderCard(request)
  .then(result => console.info('Retrieve migrated provider card', result))
  .catch(err => console.error('Failed to retrieve migrated provider card', err));
