const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});
// change the bin according to your needs
craftgate.installment().retrieveBinNumber('525864')
  .then(result => console.info('Search bin number information', result))
  .catch(err => console.error('Failed to search bin number information', err));
