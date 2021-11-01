const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// change member id below with valid member id
craftgate.wallet().retrieveMemberWallet(1)
  .then(result => console.info('Member wallet received', result))
  .catch(err => console.error('Failed to receive member wallet', err));
