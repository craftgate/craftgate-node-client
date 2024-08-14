const test = require('ava');
const nock = require('nock');

const Craftgate = require('../../dist');

const onboardingAdapter = new Craftgate.Adapter.OnboardingAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

test('createSubMerchant() should create sub merchant member', async t => {
  const request = {
    isBuyer: false,
    isSubMerchant: true,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation'
  };

  const response = {
    id: 42,
    status: 'ACTIVE',
    isBuyer: false,
    isSubMerchant: true,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    address: 'Tatooine',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Wallet
  };

  nock('http://localhost:8000').post('/onboarding/v1/members', request).reply(200, {data: response});

  const result = await onboardingAdapter.createMember(request);
  t.is(result.id, 42);
  t.is(result.status, Craftgate.Model.Status.Active);
  t.is(result.isBuyer, false);
  t.is(result.isSubMerchant, true);
  t.is(result.memberType, Craftgate.Model.MemberType.Personal);
  t.is(result.memberExternalId, 'wormie');
  t.is(result.name, 'Luke Skywalker');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.address, 'Tatooine');
  t.is(result.phoneNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
});

test('updateSubMerchant() should update sub merchant member', async t => {
  const request = {
    isBuyer: false,
    isSubMerchant: true,
    memberType: Craftgate.Model.MemberType.Personal,
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  const response = {
    id: 42,
    status: 'ACTIVE',
    isBuyer: false,
    isSubMerchant: true,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    address: 'Tatooine',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  nock('http://localhost:8000').put('/onboarding/v1/members/42', request).reply(200, {data: response});

  const result = await onboardingAdapter.updateMember(response.id, request);
  t.is(result.id, 42);
  t.is(result.status, Craftgate.Model.Status.Active);
  t.is(result.isBuyer, false);
  t.is(result.isSubMerchant, true);
  t.is(result.memberType, Craftgate.Model.MemberType.Personal);
  t.is(result.memberExternalId, 'wormie');
  t.is(result.name, 'Luke Skywalker');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.address, 'Tatooine');
  t.is(result.phoneNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
});

test('retrieveSubMerchant() should retrieve sub merchant member', async t => {
  const response = {
    id: 42,
    status: 'ACTIVE',
    isBuyer: false,
    isSubMerchant: true,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    address: 'Tatooine',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  nock('http://localhost:8000').get(`/onboarding/v1/members/${response.id}`).reply(200, {data: response});

  const result = await onboardingAdapter.retrieveMember(response.id);
  t.is(result.id, 42);
  t.is(result.status, Craftgate.Model.Status.Active);
  t.is(result.isBuyer, false);
  t.is(result.isSubMerchant, true);
  t.is(result.memberType, Craftgate.Model.MemberType.Personal);
  t.is(result.memberExternalId, 'wormie');
  t.is(result.name, 'Luke Skywalker');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.address, 'Tatooine');
  t.is(result.phoneNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
});

test('createBuyer() should create buyer member', async t => {
  const request = {
    isBuyer: true,
    isSubMerchant: false,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  const response = {
    id: 43,
    status: 'ACTIVE',
    isBuyer: true,
    isSubMerchant: false,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    address: 'Tatooine',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  nock('http://localhost:8000').post('/onboarding/v1/members', request).reply(200, {data: response});

  const result = await onboardingAdapter.createMember(request);
  t.is(result.id, 43);
  t.is(result.status, Craftgate.Model.Status.Active);
  t.is(result.isBuyer, true);
  t.is(result.isSubMerchant, false);
  t.is(result.memberType, Craftgate.Model.MemberType.Personal);
  t.is(result.memberExternalId, 'wormie');
  t.is(result.name, 'Luke Skywalker');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.address, 'Tatooine');
  t.is(result.phoneNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
});

test('updateBuyer() should update buyer member', async t => {
  const request = {
    isBuyer: true,
    isSubMerchant: false,
    memberType: Craftgate.Model.MemberType.Personal,
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  const response = {
    id: 43,
    status: 'ACTIVE',
    isBuyer: true,
    isSubMerchant: false,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    address: 'Tatooine',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  nock('http://localhost:8000').put('/onboarding/v1/members/43', request).reply(200, {data: response});

  const result = await onboardingAdapter.updateMember(response.id, request);
  t.is(result.id, 43);
  t.is(result.status, Craftgate.Model.Status.Active);
  t.is(result.isBuyer, true);
  t.is(result.isSubMerchant, false);
  t.is(result.memberType, Craftgate.Model.MemberType.Personal);
  t.is(result.memberExternalId, 'wormie');
  t.is(result.name, 'Luke Skywalker');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.address, 'Tatooine');
  t.is(result.phoneNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
});

test('retrieveBuyer() should retrieve buyer member', async t => {
  const response = {
    id: 43,
    status: 'ACTIVE',
    isBuyer: true,
    isSubMerchant: false,
    memberType: Craftgate.Model.MemberType.Personal,
    memberExternalId: 'wormie',
    name: 'Luke Skywalker',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    address: 'Tatooine',
    phoneNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    legalCompanyTitle: 'Skywalker Aviation',
    settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
  };

  nock('http://localhost:8000').get(`/onboarding/v1/members/${response.id}`).reply(200, {data: response});

  const result = await onboardingAdapter.retrieveMember(response.id);
  t.is(result.id, 43);
  t.is(result.status, Craftgate.Model.Status.Active);
  t.is(result.isBuyer, true);
  t.is(result.isSubMerchant, false);
  t.is(result.memberType, Craftgate.Model.MemberType.Personal);
  t.is(result.memberExternalId, 'wormie');
  t.is(result.name, 'Luke Skywalker');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.address, 'Tatooine');
  t.is(result.phoneNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
});

test('searchMembers() should search for members', async t => {
  const request = {
    name: 'luke',
    memberIds: [1, 2, 42],
    memberExternalId: 'wormie',
    memberType: Craftgate.Model.MemberType.Personal,
    page: 0,
    size: 25
  };

  const queryString = ['name=luke', 'memberIds[]=1', 'memberIds[]=2', 'memberIds[]=42', 'memberExternalId=wormie', 'memberType=PERSONAL', 'page=0', 'size=25'].join('&');

  const response = {
    page: 0,
    size: 25,
    totalSize: 1,
    items: [
      {
        id: 42,
        status: 'ACTIVE',
        isBuyer: false,
        isSubMerchant: true,
        memberType: Craftgate.Model.MemberType.Personal,
        memberExternalId: 'wormie',
        name: 'Luke Skywalker',
        email: 'luke@skywalker.com',
        iban: 'TR320010009999901234567890',
        address: 'Tatooine',
        phoneNumber: '+905551234567',
        taxOffice: 'Tatooine',
        taxNumber: '1234123456',
        contactName: 'Luke',
        contactSurname: 'Skywalker',
        legalCompanyTitle: 'Skywalker Aviation',
        settlementEarningsDestination: Craftgate.Model.SettlementEarningsDestination.Iban
      }
    ]
  };

  nock('http://localhost:8000').get(`/onboarding/v1/members?${queryString}`).reply(200, {data: response});

  const {page, size, totalSize, items} = await onboardingAdapter.searchMembers(request);
  t.is(page, 0);
  t.is(size, 25);
  t.is(totalSize, 1);
  t.is(items.length, 1);
  t.is(items[0].id, 42);
  t.is(items[0].status, Craftgate.Model.Status.Active);
  t.is(items[0].isBuyer, false);
  t.is(items[0].isSubMerchant, true);
  t.is(items[0].memberType, Craftgate.Model.MemberType.Personal);
  t.is(items[0].memberExternalId, 'wormie');
  t.is(items[0].name, 'Luke Skywalker');
  t.is(items[0].email, 'luke@skywalker.com');
  t.is(items[0].iban, 'TR320010009999901234567890');
  t.is(items[0].address, 'Tatooine');
  t.is(items[0].phoneNumber, '+905551234567');
  t.is(items[0].taxOffice, 'Tatooine');
  t.is(items[0].taxNumber, '1234123456');
  t.is(items[0].contactName, 'Luke');
  t.is(items[0].contactSurname, 'Skywalker');
  t.is(items[0].legalCompanyTitle, 'Skywalker Aviation');
});
