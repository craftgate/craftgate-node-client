const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});


const request = {
    sourceCardUserKey: 'c356a934-3460-46f4-ba76-3ecea197de6a', // change it with valid cardUserKey
    sourceCardToken: 'e6f66ad4-cf05-48df-b6ff-09186980848e', // change it with valid cardToken
    targetMerchantId: 1,
};

craftgate.payment().cloneCard(request)
    .then(results => console.info('Clone stored card response', results))
    .catch(err => console.error('Failed to clone stored card', err));
