const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    price: 10000,
    currency: Craftgate.Model.Currency.TRY,
    apmType : Craftgate.Model.ApmType.Maslak,
    items: [
        {
            id: "200",
            name: "Test Elektronik 2",
            brandName:"iphone",
            type: Craftgate.Model.BnplCartItemType.Other,
            unitPrice: 3000,
            quantity: 2,
        },
        {
            id: "100",
            name: "Test Elektronik 1",
            brandName:"Samsung",
            type: Craftgate.Model.BnplCartItemType.MobilePhoneOver5000Try,
            unitPrice: 4000,
            quantity: 1,
        }
    ]
};

craftgate.payment().retrieveBnplOffers(request)
    .then(results => console.info('Approve  bnpl payment  response', results))
    .catch(err => console.error('Failed to approve bnpl payment', err));
