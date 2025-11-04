
const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

//request
const request = {
  listName: 'ipList',
  type: Craftgate.Model.FraudValueType.Ip,
  label: "local ip 1",
  value: "127.0.0.1"
};

craftgate.fraud().addValueToValueList(request)
  .then(() => console.info('Value added to fraud value list'))
  .catch(err => console.error('Failed to add value to fraud value list', err));
