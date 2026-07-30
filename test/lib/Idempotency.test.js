const test = require('ava');
const MockAdapter = require('axios-mock-adapter');

const utils = require('../../dist/lib/utils');

const originalGenerateRandomString = utils.generateRandomString;

const { HttpClient, requestScopedConfig } = require('../../dist/lib/HttpClient');

const IDEMPOTENCY_KEY_HEADER_NAME = 'x-idempotency-key';

const newClient = () =>
  new HttpClient({
    apiKey: 'dummy',
    secretKey: 'dummy',
    baseUrl: 'http://localhost:8000'
  });

/** Captures the outgoing axios config so headers, body and query can be asserted. */
const capture = (client, method, path) => {
  const mock = new MockAdapter(client._client);
  const seen = {};

  mock[`on${method}`](path).reply(config => {
    seen.headers = config.headers;
    seen.data = config.data;
    seen.params = config.params;
    return [200, { data: 'ok' }];
  });

  return seen;
};

test('post() sends the idempotency key from the body as a header', async t => {
  const client = newClient();
  const seen = capture(client, 'Post', '/foo');

  await client.post('/foo', { foo: 42, idempotencyKey: 'idempotency-key-1' });

  t.is(seen.headers[IDEMPOTENCY_KEY_HEADER_NAME], 'idempotency-key-1');
});

test('post() omits the header when no key is set', async t => {
  const client = newClient();
  const seen = capture(client, 'Post', '/foo');

  await client.post('/foo', { foo: 42 });

  t.false(Object.prototype.hasOwnProperty.call(seen.headers, IDEMPOTENCY_KEY_HEADER_NAME));
});

test('post() strips the key from the serialized body', async t => {
  const client = newClient();
  const seen = capture(client, 'Post', '/foo');

  await client.post('/foo', { foo: 42, idempotencyKey: 'idempotency-key-1' });

  t.is(seen.data, JSON.stringify({ foo: 42 }));
  t.false(seen.data.includes('idempotencyKey'));
  t.false(seen.data.includes('idempotency-key-1'));
});

test('post() strips only the top-level key, leaving nested caller data untouched', async t => {
  const client = newClient();
  const seen = capture(client, 'Post', '/foo');

  await client.post('/foo', {
    foo: 42,
    idempotencyKey: 'idempotency-key-1',
    additionalParams: { idempotencyKey: 'provider-side-key' }
  });

  t.is(seen.headers[IDEMPOTENCY_KEY_HEADER_NAME], 'idempotency-key-1');
  t.is(seen.data, JSON.stringify({ foo: 42, additionalParams: { idempotencyKey: 'provider-side-key' } }));
  t.false(seen.data.includes('idempotency-key-1'));
});

test('post() signs the same body with and without a key', async t => {
  utils.generateRandomString = () => 'foo';
  try {
    const withKey = newClient();
    const seenWithKey = capture(withKey, 'Post', '/foo');
    await withKey.post('/foo', { foo: 42, idempotencyKey: 'idempotency-key-1' });

    const withoutKey = newClient();
    const seenWithoutKey = capture(withoutKey, 'Post', '/foo');
    await withoutKey.post('/foo', { foo: 42 });

    t.is(seenWithKey.headers['x-signature'], seenWithoutKey.headers['x-signature']);
    // Pinned in HttpClient.test.js for the same body.
    t.is(seenWithKey.headers['x-signature'], '5PmVYuEmz1ueo49ta5QraJUrtUcDr0RKGwT+ZlmJqmM=');
  } finally {
    utils.generateRandomString = originalGenerateRandomString;
  }
});

test('get() sends the key as a header and keeps it out of the query string', async t => {
  const client = newClient();
  const seen = capture(client, 'Get', '/foo');

  await client.get('/foo', { foo: 42, idempotencyKey: 'idempotency-key-1' });

  t.is(seen.headers[IDEMPOTENCY_KEY_HEADER_NAME], 'idempotency-key-1');
  t.is(utils.serializeParams({ foo: 42, idempotencyKey: 'idempotency-key-1' }), 'foo=42');
});

test('serializeParams omits the reserved key', t => {
  t.is(utils.serializeParams({ idempotencyKey: 'idempotency-key-1' }), '');
  t.is(utils.serializeParams({ a: 1, idempotencyKey: 'idempotency-key-1', b: 2 }), 'a=1&b=2');
});

test('get() signs the same URL with and without a key', async t => {
  utils.generateRandomString = () => 'foo';
  try {
    const withKey = newClient();
    const seenWithKey = capture(withKey, 'Get', '/foo');
    await withKey.get('/foo', { foo: 42, idempotencyKey: 'idempotency-key-1' });

    const withoutKey = newClient();
    const seenWithoutKey = capture(withoutKey, 'Get', '/foo');
    await withoutKey.get('/foo', { foo: 42 });

    t.is(seenWithKey.headers['x-signature'], seenWithoutKey.headers['x-signature']);
    // Pinned in HttpClient.test.js for the same query.
    t.is(seenWithKey.headers['x-signature'], 'tf0w4o41UCEreJKeQZRHDmJlZr1K2IxG67dMZE5+0gc=');
  } finally {
    utils.generateRandomString = originalGenerateRandomString;
  }
});

test('delete() with requestScopedConfig sends the header and no body', async t => {
  const client = newClient();
  const seen = capture(client, 'Delete', '/foo');

  await client.delete('/foo', undefined, requestScopedConfig({ idempotencyKey: 'idempotency-key-1' }));

  t.is(seen.headers[IDEMPOTENCY_KEY_HEADER_NAME], 'idempotency-key-1');
  t.is(typeof seen.data, 'undefined');
  t.is(typeof seen.params, 'undefined');
});

test('delete() signature is unchanged by the key', async t => {
  utils.generateRandomString = () => 'foo';
  try {
    const withKey = newClient();
    const seenWithKey = capture(withKey, 'Delete', '/foo');
    await withKey.delete('/foo', undefined, requestScopedConfig({ idempotencyKey: 'idempotency-key-1' }));

    const withoutKey = newClient();
    const seenWithoutKey = capture(withoutKey, 'Delete', '/foo');
    await withoutKey.delete('/foo');

    t.is(seenWithKey.headers['x-signature'], seenWithoutKey.headers['x-signature']);
  } finally {
    utils.generateRandomString = originalGenerateRandomString;
  }
});

test('requestScopedConfig returns an empty config when no option is set', t => {
  t.deepEqual(requestScopedConfig(undefined), {});
  t.deepEqual(requestScopedConfig({}), {});
  t.deepEqual(requestScopedConfig({ idempotencyKey: undefined }), {});
});

test('the caller request object is not mutated, so it can be reused to retry', async t => {
  const client = newClient();
  capture(client, 'Post', '/foo');

  const request = { foo: 42, idempotencyKey: 'idempotency-key-1' };
  await client.post('/foo', request);

  // Nothing writes to the request object, so a retry still carries the key.
  t.is(request.idempotencyKey, 'idempotency-key-1');
  t.deepEqual(request, { foo: 42, idempotencyKey: 'idempotency-key-1' });
});

test('a second call with the same object still sends the key', async t => {
  const client = newClient();
  const seen = capture(client, 'Post', '/foo');
  const request = { foo: 42, idempotencyKey: 'idempotency-key-1' };

  await client.post('/foo', request);
  await client.post('/foo', request);

  t.is(seen.headers[IDEMPOTENCY_KEY_HEADER_NAME], 'idempotency-key-1');
});
