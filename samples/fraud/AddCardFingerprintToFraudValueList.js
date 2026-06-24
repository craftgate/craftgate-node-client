
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

//request
const request = {
  label: "label",
  durationInSeconds: 60,
  operationId: "operationId",
  operation: Craftgate.Model.FraudOperation.Payment
};

craftgate.fraud().addCardFingerprint(request, "listName")
  .then(() => console.info('Value added to fraud value list'))
  .catch(err => console.error('Failed to add value to fraud value list', err));
