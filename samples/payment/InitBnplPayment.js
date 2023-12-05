const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    price: 10000,
    paidPrice : 10000,
    currency: Craftgate.Model.Currency.TRY,
    apmType : Craftgate.Model.ApmType.Maslak,
    apmOrderId: "456d1297-908e-4bd6-a13b-4be31a6e47d5",
    paymentGroup : Craftgate.Model.PaymentGroup.Product,
    conversationId : "29393-mXld92ko3",
    externalId : "external_id-345",
    callbackUrl : "callback",
    bankCode: "103",
    items: [
        {
            externalId: "38983903",
            name: "item-1",
            price: 6000,
        },
        {
            externalId: "92983294",
            name: "item-2",
            price: 4000,
        }
    ],
    cartItems: [
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

craftgate.payment().initBnplPayment(request)
    .then(results => console.info('Init bnpl payment response', results))
    .catch(err => console.error('Failed to Init bnpl payment', err));
