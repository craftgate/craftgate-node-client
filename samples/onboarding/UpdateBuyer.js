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
  name: 'Haluk Demir',
  memberType: Craftgate.Model.MemberType.Personal,
  address: 'Suadiye Mah. Örnek Cd. No:23, 34740 Kadıköy/İstanbul'
};

// change the memberId (displayed as 1 below) with a valid id to run the sample
craftgate
  .onboarding()
  .updateMember(1, request)
  .then(result => console.info('Buyer member updated', result))
  .catch(err => console.error('Failed to update buyer member', err));
