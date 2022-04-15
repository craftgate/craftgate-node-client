const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  name: "A new Product",
  channel: "API",
  currency: Craftgate.Model.Currency.TRY
};

craftgate.payByLink().searchProducts(request)
  .then(result => console.info('Product successfully searched', result))
  .catch(err => console.error('Search products failed', err));
