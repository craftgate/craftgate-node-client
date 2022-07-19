const test = require('ava');
const MockAdapter = require('axios-mock-adapter');

const utils = require('../../dist/lib/utils');

const originalGenerateRandomString = utils.generateRandomString;

const {HttpClient} = require('../../dist/lib/HttpClient');
const CraftgateError = require('../../dist').CraftgateError;


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

test('HttpClient::get() should not add an unnecessary body property to the request', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  const mock = new MockAdapter(client._client);

  mock.onGet('/foo')
    .reply(config => {
      if (!config.hasOwnProperty('data') || typeof config.data === 'undefined') {
        return [200, 'ok'];
      }

      return [500, 'No data field should be present in the request config'];
    });

  await t.notThrowsAsync(client.get('/foo'));
});

test('HttpClient::delete() should not add an unnecessary body property to the request', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  const mock = new MockAdapter(client._client);

  mock.onDelete('/foo')
    .reply(config => {
      if (!config.hasOwnProperty('data') || typeof config.data === 'undefined') {
        return [200, 'ok'];
      }

      return [500, 'No data field should be present in the request config'];
    });

  await t.notThrowsAsync(client.delete('/foo'));
});

test('HttpClient::get() should set the correct PKI headers for given params', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  utils.generateRandomString = () => 'foo';

  const mock = new MockAdapter(client._client);

  mock.onGet('/foo', {params: {foo: 42}})
    .reply(config => {
      const allHeadersOk = [
        config.headers['x-api-key'] === 'dummy',
        config.headers['x-auth-version'] === '1',
        config.headers['x-rnd-key'] === 'foo',
        config.headers['x-signature'] === 'tf0w4o41UCEreJKeQZRHDmJlZr1K2IxG67dMZE5+0gc='
      ].every(x => !!x);

      if (allHeadersOk) {
        return [200, 'ok'];
      }

      return [500, 'Some headers are missing or invalid'];
    });

  try {
    await t.notThrowsAsync(client.get('/foo', {foo: 42}));
  } finally {
    utils.generateRandomString = originalGenerateRandomString;
  }
});

test('HttpClient::delete() should set the correct PKI headers for given params', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  utils.generateRandomString = () => 'foo';

  const mock = new MockAdapter(client._client);

  mock.onDelete('/foo', {params: {foo: 42}})
    .reply(config => {
      const allHeadersOk = [
        config.headers['x-api-key'] === 'dummy',
        config.headers['x-auth-version'] === '1',
        config.headers['x-rnd-key'] === 'foo',
        config.headers['x-signature'] === 'tf0w4o41UCEreJKeQZRHDmJlZr1K2IxG67dMZE5+0gc='
      ].every(x => !!x);

      if (allHeadersOk) {
        return [200, 'ok'];
      }

      return [500, 'Some headers are missing or invalid'];
    });

  try {
    await t.notThrowsAsync(client.delete('/foo', {foo: 42}));
  } finally {
    utils.generateRandomString = originalGenerateRandomString;
  }
});

test('HttpClient::post() should set the correct PKI headers for given body', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  utils.generateRandomString = () => 'foo';

  const mock = new MockAdapter(client._client);

  mock.onPost('/foo', {foo: 42})
    .reply(config => {
      const allHeadersOk = [
        config.headers['x-api-key'] === 'dummy',
        config.headers['x-auth-version'] === '1',
        config.headers['x-rnd-key'] === 'foo',
        config.headers['x-signature'] === '5PmVYuEmz1ueo49ta5QraJUrtUcDr0RKGwT+ZlmJqmM='
      ].every(x => !!x);

      if (allHeadersOk) {
        return [200, 'ok'];
      }

      return [500, 'Some headers are missing or invalid'];
    });

  try {
    await t.notThrowsAsync(client.post('/foo', {foo: 42}));
  } finally {
    utils.generateRandomString = originalGenerateRandomString;
  }
});

test('HttpClient::put() should set the correct PKI headers for given body', async t => {
  const client = new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

  utils.generateRandomString = () => 'foo';

  const mock = new MockAdapter(client._client);

  mock.onPut('/foo', {foo: 42})
    .reply(config => {
      const allHeadersOk = [
        config.headers['x-api-key'] === 'dummy',
        config.headers['x-auth-version'] === '1',
        config.headers['x-rnd-key'] === 'foo',
        config.headers['x-signature'] === '5PmVYuEmz1ueo49ta5QraJUrtUcDr0RKGwT+ZlmJqmM='
      ].every(x => !!x);

      if (allHeadersOk) {
        return [200, 'ok'];
      }

      return [500, 'Some headers are missing or invalid'];
    });

  try {
    await t.notThrowsAsync(client.put('/foo', {foo: 42}));
  } finally {
    utils.generateRandomString = originalGenerateRandomString;
  }
});
