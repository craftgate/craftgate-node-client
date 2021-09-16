const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// play with the request
const request = {
  binNumber: '525864',
  price: 100,
  currency: Craftgate.Model.Currency.TRY,
  distinctCardBrandsWithLowestCommissions: true
};

craftgate.installment().searchInstallments(request)
  .then(result => console.info('Search installments with distinct card brand', result))
  .catch(err => console.error('Failed to search installments with distinct card brand', err));
