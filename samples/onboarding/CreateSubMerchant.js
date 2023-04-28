const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  isBuyer: false,
  isSubMerchant: true,
  contactName: 'Haluk',
  contactSurname: 'Demir',
  email: 'haluk.demir@example.com',
  phoneNumber: '905551111111',
  iban: 'TR930006701000000001111111',
  identityNumber: '11111111110',
  legalCompanyTitle: 'Dem Zeytinyağı Üretim Ltd. Şti.',
  name: 'Dem Zeytinyağı Üretim Ltd. Şti.',
  memberType: Craftgate.Model.MemberType.LimitedOrStockJointCompany,
  memberExternalId: 'random-id',
  taxNumber: '1111111114',
  taxOffice: 'Erenköy',
  address: 'Suadiye Mah. Örnek Cd. No:23, 34740 Kadıköy/İstanbul'
};

craftgate.onboarding().createMember(request)
  .then(result => console.info('Sub merchant member created', result))
  .catch(err => console.error('Failed to create sub merchant member', err));
