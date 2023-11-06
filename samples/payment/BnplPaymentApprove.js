const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().approve(410501)
    .then(results => console.info('Approve payment transactions response', results))
    .catch(err => console.error('Failed to approve payment transactions', err));
