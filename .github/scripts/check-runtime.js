var process = require('process');

var Craftgate = require('@craftgate/craftgate');

var craftgate = new Craftgate.Client({
  apiKey: 'sandbox-YEhueLgomBjqsnvBlWVVuFsVhlvJlMHE',
  secretKey: 'sandbox-tBdcdKVGmGupzfaWcULcwDLMoglZZvTz',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

function assert(expr, message) {
  if (!expr) {
    console.error('Check failed', message);
    return process.exit(1);
  }

  console.info('Check OK', message);
}

function assertAsync(fn, message) {
  try {
    fn(function (err, result) {
      if (err) {
        console.error('Async check failed', message, err);
        return process.exit(2);
      }

      console.info('Async check OK', message, result);
    });
  } catch (err) {
    console.error('Async check failed before being executed', message, err);
    process.exit(3)
  }
}

function isConstructor(fn) {
  return fn && (typeof fn === 'function') && fn.prototype && (fn.prototype.constructor === fn);
}

function testSearch(callback) {
  craftgate.onboarding()
    .searchMembers({isBuyer: false, isSubMerchant: true})
    .then(function (results) {
      callback(null, {success: true, totalSize: results.totalSize});
    })
    .catch(function (err) {
      callback(err);
    });
}

assert(!!Craftgate, 'Craftgate must not be false');
assert(isConstructor(Craftgate.Client), 'Craftgate.Client must be a constructor');

assert(!!Craftgate.Model, 'Craftgate.Model must not be false')
assert(Object.keys(Craftgate.Model).length > 0, 'Craftgate.Model must not be empty');

assert(!!Craftgate.Adapter, 'Craftgate.Adapter must not be false')
assert(Object.keys(Craftgate.Adapter).length > 0, 'Craftgate.Adapter must not be empty');

assert(!!Craftgate.CraftgateError, 'Craftgate.CraftgateError must not be false');
assert(isConstructor(Craftgate.Client), 'Craftgate.CraftgateError must be a constructor');
