const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

// change multi payment token below with a valid one
craftgate.payment().retrieveMultiPayment('6d7e66b5-9b1c-4c1d-879a-2557b651096e')
  .then(payment => console.info('Multi payment retrieved', payment))
  .catch(err => console.error('Failed to retrieve multi payment', err));
