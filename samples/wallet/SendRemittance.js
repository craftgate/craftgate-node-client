const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// play with the request
const request = {
  memberId: 1,
  price: 50,
  description: 'Remittance send to memberId 1',
  remittanceReasonType: Craftgate.Model.RemittanceReasonType.RedeemOnlyLoyalty
};

craftgate.wallet().sendRemittance(request)
  .then(result => console.info('Remittance sent', result))
  .catch(err => console.error('Failed to send remittance', err));
