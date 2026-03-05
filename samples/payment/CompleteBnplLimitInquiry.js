const Craftgate = require('../../dist');
const ApmType = require('../../src/model/ApmType');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.payment().completeBnplLimitInquiry({
    apmType: ApmType.Zip,
    additionalParams: {
        buyerPhoneNumber: '+905320000000',
        otpCode: '123456'
    }
})
    .then(results => console.info('Complete BNPL limit inquiry response ', results))
    .catch(err => console.error('Failed to complete BNPL limit inquiry', err));
