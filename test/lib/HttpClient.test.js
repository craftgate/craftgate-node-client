const test = require('ava');
const MockAdapter = require('axios-mock-adapter');

const {HttpClient} = require('../../dist/lib/HttpClient');
const CraftgateError = require('../../dist').CraftgateError;

test('HttpClient should translate API errors to CraftgateError errors when status code is 200', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  const mock = new MockAdapter(client._client);

  const errorCode = '9001';
  const errorDescription = 'Ödeme bulunamadı!';

  mock.onGet('/foo')
    .reply(200, {
      errors: {
        errorCode,
        errorDescription
      }
    });

  let caughtException = null;
  try {
    await client.get('/foo');
    caughtException = new Error('Request should not have succeeded');
  } catch (e) {
    caughtException = e;
  }

  t.true(caughtException instanceof CraftgateError);
  t.is(caughtException.getErrorCode(), errorCode);
  t.is(caughtException.getErrorDescription(), errorDescription);
  t.truthy(caughtException.stack);
  t.is(caughtException.message, errorDescription);
});

test('HttpClient should translate API errors to CraftgateError errors when status code is not 200', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  const mock = new MockAdapter(client._client);

  const errorCode = '9001';
  const errorDescription = 'Ödeme bulunamadı!';

  mock.onGet('/foo')
    .reply(404, {
      errors: {
        errorCode,
        errorDescription
      }
    });

  let caughtException = null;
  try {
    await client.get('/foo');
    caughtException = new Error('Request should not have succeeded');
  } catch (e) {
    caughtException = e;
  }

  t.true(caughtException instanceof CraftgateError);
  t.is(caughtException.getErrorCode(), errorCode);
  t.is(caughtException.getErrorDescription(), errorDescription);
  t.truthy(caughtException.stack);
  t.is(caughtException.message, errorDescription);
});
