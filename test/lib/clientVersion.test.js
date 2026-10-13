const test = require('ava');
const MockAdapter = require('axios-mock-adapter');

const { HttpClient } = require('../../dist/lib/HttpClient');
const { CLIENT_VERSION, DEVELOPMENT_VERSION, resolveClientVersion } = require('../../dist/lib/clientVersion');
const packageVersion = require('../../package.json').version;

test('resolveClientVersion should return the package version', t => {
  t.is(resolveClientVersion('1.0.71'), '1.0.71');
});

test('resolveClientVersion should return unknown for the development placeholder', t => {
  t.is(resolveClientVersion(DEVELOPMENT_VERSION), 'unknown');
});

test('resolveClientVersion should return unknown when there is no version', t => {
  t.is(resolveClientVersion(undefined), 'unknown');
  t.is(resolveClientVersion(''), 'unknown');
});

test('CLIENT_VERSION should come from package.json', t => {
  t.is(CLIENT_VERSION, packageVersion === DEVELOPMENT_VERSION ? 'unknown' : packageVersion);
});

test('HttpClient should send the client version header', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });
  const mock = new MockAdapter(client._client);
  let headers = null;
  mock.onGet('/foo').reply(config => {
    headers = config.headers;
    return [200, {data: {}}];
  });

  await client.get('/foo');

  t.is(headers['x-client-version'], `craftgate-node-client:${CLIENT_VERSION}`);
});
