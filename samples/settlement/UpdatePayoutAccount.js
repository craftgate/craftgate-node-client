const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  type: Craftgate.Model.PayoutAccountType.WISE,
  externalAccountId: 'wiseRecipientId2'
};

craftgate.settlement().updatePayoutAccount(11, request)
  .catch(err => console.error('Failed to update payout account', err));
