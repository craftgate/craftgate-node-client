const test = require('ava');

const Utils = require('../../dist/lib/utils');

test('getAbsoluteUrl() should return baseUrl when relativeUrl is null', t => {
  const baseUrl = 'http://foo.com';
  const actual = Utils.getAbsoluteUrl(baseUrl);
  t.is(actual, baseUrl);
});

test('getAbsoluteUrl() should retain the trailing slash in baseUrl when relativeUrl is null', t => {
  const baseUrl = 'http://foo.com/';
  const actual = Utils.getAbsoluteUrl(baseUrl);
  t.is(actual, baseUrl);
});

test('getAbsoluteUrl() should remove duplicate slashes', t => {
  const baseUrl = 'http://foo.com/';
  const relativeUrl = '/bar';
  const expected = 'http://foo.com/bar';
  const actual = Utils.getAbsoluteUrl(baseUrl, relativeUrl);
  t.is(actual, expected);
});

test('getAbsoluteUrl() should remove duplicates when baseUrl has multiple trailing slashes', t => {
  const baseUrl = 'http://foo.com////';
  const relativeUrl = '/bar';
  const expected = 'http://foo.com/bar';
  const actual = Utils.getAbsoluteUrl(baseUrl, relativeUrl);
  t.is(actual, expected);
});

test('getAbsoluteUrl() should remove duplicates when relativeUrl has multiple leading slashes', t => {
  const baseUrl = 'http://foo.com/';
  const relativeUrl = '////bar';
  const expected = 'http://foo.com/bar';
  const actual = Utils.getAbsoluteUrl(baseUrl, relativeUrl);
  t.is(actual, expected);
});

test('getAbsoluteUrl() should add slashes between base and relative URLs', t => {
  const baseUrl = 'http://foo.com';
  const relativeUrl = 'bar';
  const expected = 'http://foo.com/bar';
  const actual = Utils.getAbsoluteUrl(baseUrl, relativeUrl);
  t.is(actual, expected);
});

test('getAbsoluteUrl() should reatin the trailing slash in relativeUrl', t => {
  const baseUrl = 'http://foo.com/';
  const relativeUrl = '/bar/';
  const expected = 'http://foo.com/bar/';
  const actual = Utils.getAbsoluteUrl(baseUrl, relativeUrl);
  t.is(actual, expected);
});

test('serializeParams() should use empty string for undefined and null while retaining other falsy values', t => {
  const params = {
    foo: '',
    bar: undefined,
    baz: null,
    quux: false,
    hoge: -1,
    piyo: 0
  };

  const expected = 'foo=&bar=&baz=&quux=false&hoge=-1&piyo=0';
  const actual = Utils.serializeParams(params);
  t.is(actual, expected);
});

test('serializeParams() should not add brackets to names of array fields', t => {
  const params = {
    foo: ['bar', 'baz', 42]
  };

  const expected = 'foo=bar&foo=baz&foo=42';
  const actual = Utils.serializeParams(params);
  t.is(actual, expected);
});

test('serializeParams() should use empty strings for undefined and null values in arrays', t => {
  const params = {
    foo: ['bar', 'baz', undefined, null, false, -1, 0, 42]
  };

  const expected = 'foo=bar&foo=baz&foo=&foo=&foo=false&foo=-1&foo=0&foo=42';
  const actual = Utils.serializeParams(params);
  t.is(actual, expected);
});

test('serializeParams() should encode values in params', t => {
  const params = {
    foo: 'spaces are evil',
    bar: 'so are &\'s'
  };

  const expected = `foo=${encodeURIComponent(params.foo)}&bar=${encodeURIComponent(params.bar)}`;
  const actual = Utils.serializeParams(params);
  t.is(actual, expected);
});

test('serializeParams() should convert Date instances to ISO date strings', t => {
  const date = new Date();

  const params = {date};

  const expected = `date=${encodeURIComponent(date.toISOString())}`;
  const actual = Utils.serializeParams(params);
  t.is(actual, expected);
});
