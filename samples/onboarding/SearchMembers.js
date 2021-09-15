const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  name: 'Zeytinyağı Üretim', // change name as you wish run the sample
  page: 0,
  size: 25,
  memberIds: [1, 2], // change memberIds with a real ids to run the sample
  memberType: Craftgate.Model.MemberType.LimitedOrStockJointCompany
};

craftgate.onboarding().searchMembers(request)
  .then(result => console.info('Retrieved member search results', result))
  .catch(err => console.error('Failed to search member', err));
