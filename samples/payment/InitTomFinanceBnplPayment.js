const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    price: 100,
    paidPrice : 100,
    currency: Craftgate.Model.Currency.TRY,
    apmType : Craftgate.Model.ApmType.TomFinance,
    apmOrderId: "myUniqueApmOrderId",
    paymentGroup : Craftgate.Model.PaymentGroup.Product,
    conversationId : "conversationId",
    externalId : "externalId",
    callbackUrl : "https://www.your-website.com/callback",
    additionalParams: {
        "buyerName": "John Doe",
        "buyerPhoneNumber": "5552221133"
    },
    items: [
        {
            externalId: "externalId",
            name: "item-1",
            price: 100,
        }
    ],
    cartItems: [
        {
            id: "26020874",
            name: "Test item-1",
            brandName:"26010303",
            type: Craftgate.Model.BnplCartItemType.Other,
            unitPrice: 100,
            quantity: 1,
        }
    ]
};

craftgate.payment().initBnplPayment(request)
    .then(results => console.info('Init bnpl payment response', results))
    .catch(err => console.error('Failed to Init bnpl payment', err));
