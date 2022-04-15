const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  name: "A new Product",
  channel: "API",
  price: 10,
  currency: Craftgate.Model.Currency.TRY,
  enabledInstallments: [1,2,3,6]
};

craftgate.payByLink().createProduct(request)
  .then(result => console.info('Product successfully created', result))
  .catch(err => console.error('Create product failed', err));
