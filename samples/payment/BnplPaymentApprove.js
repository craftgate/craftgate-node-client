const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().approve(410501)
    .then(results => console.info('Approve bnpl payment response ', results))
    .catch(err => console.error('Failed to approve bnpl payment', err));
