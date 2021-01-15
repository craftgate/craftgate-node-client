const test = require('ava');
const nock = require('nock');

const Craftgate = require('../../dist');

const walletAdapter = new Craftgate.Adapter.WalletAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

test('searchWallets() should search wallets', async t => {
  const request = {
    memberId: 1,
    page: 0,
    size: 25
  };

  const queryString = [
    'memberId=1',
    'page=0',
    'size=25'
  ].join('&');

  const response = {
    page: 0,
    size: 25,
    totalSize: 1,
    items: [
      {
        id: 1,
        createdDate: '2020-09-11T10:00:00',
        updatedDate: '2020-09-11T10:00:00',
        amount: 10,
        currency: 'TRY',
        memberId: 1
      }
    ]
  };

  nock('http://localhost:8000')
    .get(`/wallet/v1/wallets?${queryString}`)
    .reply(200, {data: response});

  const {page, size, totalSize, items} = await walletAdapter.searchWallets(request);
  t.is(page, 0);
  t.is(size, 25);
  t.is(totalSize, 1);
  t.is(items.length, 1);
  t.is(items[0].id, 1);
  t.is(items[0].amount, 10);
  t.is(items[0].currency, Craftgate.Model.Currency.TRY);
  t.is(items[0].memberId, 1);
});
