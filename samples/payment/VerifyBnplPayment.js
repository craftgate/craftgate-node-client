const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().verifyBnplPayment(1)
    .then(results => console.info('Verify bnpl payment response ', results))
    .catch(err => console.error('Failed to verify bnpl payment', err));
