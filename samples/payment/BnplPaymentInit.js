const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    items: [
        {
            externalId: "38983903",
            name: "item-1",
            price: 3000,
        },
        {
            externalId: "92983294",
            name: "item-2",
            price: 7000,
        }
    ],

    cartItems: [
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
    paidPrice : 10000,
    currency: Craftgate.Model.Currency.TRY,
    apmType : Craftgate.Model.ApmType.Maslak,
    apmOrderId: "",
    paymentGroup : Craftgate.Model.PaymentGroup.Product,
    conversationId : "29393-mXld92ko3",
    externalId : "external_id-345",
    callbackUrl : "callback",
    bankCode: "103"
};

craftgate.payment().init(request)
    .then(results => console.info('Init bnpl payment  response', results))
    .catch(err => console.error('Failed to Init bnpl payment', err));
