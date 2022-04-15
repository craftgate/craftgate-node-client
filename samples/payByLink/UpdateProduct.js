const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  status: Craftgate.Model.Status.Active,
  name: "A new Product - Version 2",
  channel: "API",
  price: 10,
  currency: Craftgate.Model.Currency.TRY,
  enabledInstallments: [1,2,3]
};

craftgate.payByLink().updateProduct(1, request)
  .then(result => console.info('Product successfully updated', result))
  .catch(err => console.error('Update product failed', err));
