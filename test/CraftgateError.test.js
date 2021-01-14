const test = require('ava');

const CraftgateError = require('../dist').CraftgateError;

test('CraftgateError should be able to be constructed from an error code and description', t => {
  const errorCode = 'foo';
  const errorDescription = 'bar';
  const error = new CraftgateError({errorCode, errorDescription});
  t.is(error.getErrorCode(), errorCode);
  t.is(error.getErrorDescription(), errorDescription);
  t.is(error.message, errorDescription);
});

test('CraftgateError should retain additional data', t => {
  const errorCode = 'foo';
  const errorDescription = 'bar';
  const additionalData = {
    foo: 'bar',
    baz: {
      quux: 42
    }
  };
  const error = new CraftgateError({errorCode, errorDescription, ...additionalData});
  t.is(error.getErrorCode(), errorCode);
  t.is(error.getErrorDescription(), errorDescription);
  t.deepEqual(error.getErrorData(), additionalData);
  t.is(error.message, errorDescription);
});

test('CraftgateError should have its own constructor', t => {
  const error = new CraftgateError({errorCode: 'foo', errorDescription: 'bar'});
  t.true(error instanceof CraftgateError);
  t.is(Object.getPrototypeOf(error), CraftgateError.prototype);
  t.is(Object.getPrototypeOf(error).constructor, CraftgateError);
});

test('CraftgateError should be an instance of the built-in Error class', t => {
  const error = new CraftgateError({errorCode: 'foo', errorDescription: 'bar'});
  t.true(error instanceof Error);
});

test('CraftgateError should have its own stack', t => {
  const error = new CraftgateError({errorCode: 'foo', errorDescription: 'bar'});
  t.truthy(error.stack);
});
