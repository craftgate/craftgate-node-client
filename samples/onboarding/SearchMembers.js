const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

// play with request parameters to search members
const request = {
  name: 'Zeytinyağı Üretim',
  page: 0,
  size: 25,
  memberIds: [2112],
  memberType: Craftgate.Model.MemberType.LimitedOrStockJointCompany
};

craftgate.onboarding().searchMembers(request)
  .then(result => console.info('Retrieved member search results', result))
  .catch(err => console.error('Failed to search member', err));
