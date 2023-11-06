const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    items: [
        {
            id: "200",
            name: "Test Elektronik 2",
            brandName:"iphone",
            type: Craftgate.Model.CardItemType.Other,
            unitPrice: 3000,
            quantity: 2,
        },
        {
            id: "100",
            name: "Test Elektronik 1",
            brandName:"Samsung",
            type: Craftgate.Model.CardItemType.MobilePhoneOver5000Try,
            unitPrice: 7000,
            quantity: 1,
        }
    ],
    price: 10000,
    currency: Craftgate.Model.Currency.TRY,
    apmType : Craftgate.Model.ApmType.Maslak,
};

craftgate.payment().offers(request)
    .then(results => console.info('Approve  bnpl payment  response', results))
    .catch(err => console.error('Failed to approve bnpl payment', err));
