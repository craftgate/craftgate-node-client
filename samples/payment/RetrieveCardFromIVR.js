const Craftgate = require('../../dist');
const RetrieveCardFromIvrRequest = require('../../src/request/RetrieveCardFromIvrRequest');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    cardUserKey: '45f12c74-3000-465c-96dc-876850e7dd7a',
    callToken: "0309ac2d-c5a5-4b4f-a91f-5c444ba07b24"
};

craftgate.payment().retrieveCardFromIvr(request)
    .then(result => console.info('Retrieve card from ivr', result))
    .catch(err => console.error('Failed to retrieve card from ivr', err));
