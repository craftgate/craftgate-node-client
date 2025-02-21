const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {

    price:100.0,
    buyerMemberId: 1, //change it with a valid wallet owner, aka member id
    conversationId : '456d1297-908e-4bd6-a13b-4be31a6e47d5',
    currency: Craftgate.Model.Currency.TRY,
    callbackUrl: 'https://www.your-website.com/craftgate-3DSecure-callback',

    card : {
        cardUserKey:'0b2ec8d8-bb75-4f83-a60d-cd129ab8aed8', //change it with a valid card user key
        cardToken:'e57f8e99-0048-41f8-8752-a6a9308a391e',//change it with a valid card token
    }
};

craftgate.payment().init3DSDepositPayment(request)
.then(result => console.info('Init 3ds deposit payment successful',result))
.catch(err => console.error('Failed to init 3ds deposit payment',err));
