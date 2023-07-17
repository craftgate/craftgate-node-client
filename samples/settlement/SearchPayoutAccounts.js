const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// play with request parameters to search members
const request = {
  currency: Craftgate.Model.Currency.USD,
  accountOwner: Craftgate.Model.AccountOwner.SUB_MERCHANT_MEMBER
};

craftgate.settlement().searchPayoutAccount(request)
  .then(result => console.info('Retrieved payout account search results', result))
  .catch(err => console.error('Failed to search payout account', err));
