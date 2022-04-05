const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  isBuyer: true,
  isSubMerchant: false,
  contactName: 'Haluk',
  contactSurname: 'Demir',
  email: 'haluk.demir@example.com',
  phoneNumber: '905551111111',
  identityNumber: '11111111110',
  name: 'Haluk Demir',
  memberType: Craftgate.Model.MemberType.Personal,
  memberExternalId: 'random-id',
  address: 'Suadiye Mah. Örnek Cd. No:23, 34740 Kadıköy/İstanbul',
  walletLowerLimit: -50
};

craftgate.onboarding().createMember(request)
  .then(result => console.info('Buyer member created', result))
  .catch(err => console.error('Failed to create buyer member', err));
