const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  memberId: 1,
  price: 50,
  description: 'Remittance received from memberId 1',
  remittanceReasonType: Craftgate.Model.RemittanceReasonType.Remittance
};

craftgate.wallet().receiveRemittance(request)
  .then(result => console.info('Remittance received', result))
  .catch(err => console.error('Failed to receive remittance', err));
