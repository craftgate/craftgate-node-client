const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  binNumber: '525864',
  price: 100,
  currency: Craftgate.Model.Currency.TRY,
  paymentProvider: Craftgate.Model.PaymentProvider.Masterpass
};

craftgate.installment().searchInstallments(request)
  .then(result => console.info('Search installments with payment provider', result))
  .catch(err => console.error('Failed to search installments with payment provider', err));
