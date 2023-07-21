const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  type: Craftgate.Model.PayoutAccountType.WISE,
  externalAccountId: 'wiseRecipientId',
  currency: Craftgate.Model.Currency.USD,
  accountOwner: Craftgate.Model.AccountOwner.SUB_MERCHANT_MEMBER,
  subMerchantMemberId: 1
};

craftgate
  .settlement()
  .createPayoutAccount(request)
  .then(result => console.info('Payout Account create response', result))
  .catch(err => console.error('Failed to create payout account', err));
