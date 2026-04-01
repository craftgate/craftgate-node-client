const Craftgate = require('../../dist');
const ApmType = require('../../src/model/ApmType');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().bnplLimitInquiryInit({
    apmType: ApmType.Zip,
    additionalParams: {
        buyerPhoneNumber: '5320000000',
        buyerIdentityNumber: '11111111110',
        buyerBirthdate: '1990-01-01'
    }
})
    .then(results => console.info('Init BNPL limit inquiry response ', results))
    .catch(err => console.error('Failed to init BNPL limit inquiry', err));
