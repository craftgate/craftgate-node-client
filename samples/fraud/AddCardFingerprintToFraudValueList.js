
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

//request
const request = {
  listName: 'cardList',
  type: Craftgate.Model.FraudValueType.Card,
  label: "John Doe's Card",
  paymentId: 11675
};

craftgate.fraud().addValueToValueList(request)
  .then(() => console.info('Value added to fraud value list'))
  .catch(err => console.error('Failed to add value to fraud value list', err));
