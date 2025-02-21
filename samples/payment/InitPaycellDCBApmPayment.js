const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    apmType: Craftgate.Model.ApmType.PaycellDCB,
    price: 1.0,
    paidPrice: 1.0,
    currency: Craftgate.Model.Currency.TRY,
    paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
    conversationId: 'conversationId',
    callbackUrl: 'callback',
    items: [
        {
            name: 'Item 1',
            price: 0.4,
            externalId: '123d1297-839e-4bd6-a13b-4be31a6e12a8'
        },
        {
            name: 'Item 2',
            price: 0.6,
            externalId: '789d1297-839e-4bd6-a13b-4be31a6e13f7'
        }
    ],
    additionalParams: {"paycellGsmNumber": "5305289290"}
};

craftgate.payment().initApmPayment(request)
    .then(result => console.info('Paycell DCB Apm init payment successful', result))
    .catch(err => console.error('Failed to init Paycell DCB Apm payment', err));
