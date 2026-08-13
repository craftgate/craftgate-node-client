const Craftgate = require('../../dist');
const LoyaltyType = require("../../src/model/LoyaltyType");

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  cardNumber: '5482370000000003',
  expireYear: '2044',
  expireMonth: '07',
  cvc: '000',
  installment: 2,
  loyaltyType: LoyaltyType.AdditionalInstallment
};

craftgate.payment().retrieveLoyalties(request)
  .then(result => console.info('Successfully retrieved loyalties with explicit card info', result))
  .catch(err => console.error('Failed to retrieve loyalties with explicit card info', err));
