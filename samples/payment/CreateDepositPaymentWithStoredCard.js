const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
    price : 100,
    buyerMemberId : 1, // change it with a valid wallet owner, aka member id
    conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',

    card: {
        cardUserKey:'4b33932e-ef4e-425a-ba8b-c33e422abfe3', //change it with a valid card user key
        cardToken: '8b970491-517d-40ea-bdde-40e6989e4fa6',  //change it with a valid card token
    }
};

craftgate.payment().createDepositPayment(request)
.then(result => console.info('Payment successful',result))
.catch(err => console.error('Payment failed',err));
