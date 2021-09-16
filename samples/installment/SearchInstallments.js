const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// play with the request
const request = {
  binNumber: '520922',
  price: 100,
  currency: Craftgate.Model.Currency.TRY
};

craftgate.installment().searchInstallments(request)
  .then(result => console.info('Search installments', result))
  .catch(err => console.error('Failed to search installments', err));
